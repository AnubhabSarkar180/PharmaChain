// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title PharmaChain
 * @dev Decentralized pharmaceutical supply chain tracker.
 *      Implements a Digital Twin system for drug batches using role-based
 *      access control and an immutable custody transfer history.
 *
 * Simulation Flow:
 *   Step 1: Manufacturer mints a batch  →  Status: MANUFACTURED  (TX 1)
 *   Step 2: Distributor accepts batch   →  Status: IN_TRANSIT    (TX 2)
 *   Step 3: Retailer delivers to store  →  Status: DELIVERED     (TX 3)
 *   Step 4: Consumer scans QR code      →  View-Only Verification (TX 4)
 */
contract PharmaChain is AccessControl {

    // ─── Roles ───────────────────────────────────────────────────────────────
    bytes32 public constant MANUFACTURER_ROLE = keccak256("MANUFACTURER_ROLE");
    bytes32 public constant DISTRIBUTOR_ROLE  = keccak256("DISTRIBUTOR_ROLE");
    bytes32 public constant RETAILER_ROLE     = keccak256("RETAILER_ROLE");

    // ─── Batch Status ─────────────────────────────────────────────────────────
    enum Status {
        MANUFACTURED,   // 0 - freshly minted by manufacturer
        IN_TRANSIT,     // 1 - accepted by distributor
        DELIVERED,      // 2 - final retail delivery complete
        RECALLED        // 3 - recalled by manufacturer
    }

    // ─── Data Structures ──────────────────────────────────────────────────────

    struct CustodyRecord {
        address from;
        address to;
        Status  status;
        uint256 timestamp;
        string  location;
        string  notes;
    }

    struct Batch {
        uint256 batchId;
        string  drugName;
        string  batchCode;        // e.g. "BATCH-2024-001"
        uint256 expiryDate;       // Unix timestamp
        string  manufacturingLocation;
        address manufacturer;
        address currentOwner;
        Status  status;
        bool    isRecalled;
        bool    isSold;           // fraud prevention: true once DELIVERED
        uint256 createdAt;
        uint256 quantity;         // units in batch
        string  metadataURI;      // IPFS URI for extended metadata / QR payload
    }

    // ─── State Variables ──────────────────────────────────────────────────────

    uint256 private _batchCounter;

    // batchId → Batch
    mapping(uint256 => Batch) public batches;

    // batchId → custody history
    mapping(uint256 => CustodyRecord[]) public custodyHistory;

    // batchCode → batchId  (for QR lookup by code)
    mapping(string => uint256) public batchCodeToId;

    // ─── Events ───────────────────────────────────────────────────────────────

    event BatchMinted(
        uint256 indexed batchId,
        string  batchCode,
        string  drugName,
        address indexed manufacturer,
        uint256 expiryDate
    );

    event OwnershipTransferred(
        uint256 indexed batchId,
        address indexed from,
        address indexed to,
        Status  newStatus,
        string  location
    );

    event BatchRecalled(
        uint256 indexed batchId,
        string  batchCode,
        address recalledBy,
        string  reason
    );

    event FraudAlert(
        uint256 indexed batchId,
        address indexed scanner,
        uint256 timestamp,
        string  alertType   // "DOUBLE_SCAN" | "COUNTERFEIT"
    );

    event RoleAssigned(
        address indexed account,
        bytes32 indexed role,
        address indexed assignedBy
    );

    // ─── Constructor ──────────────────────────────────────────────────────────

    constructor() {
        // Grant the contract deployer the default admin role
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        // Also grant deployer all roles for initial seed/setup
        _grantRole(MANUFACTURER_ROLE, msg.sender);
        _grantRole(DISTRIBUTOR_ROLE,  msg.sender);
        _grantRole(RETAILER_ROLE,     msg.sender);
    }

    // ─── Role Management ─────────────────────────────────────────────────────

    /**
     * @dev Admin assigns a role to an address (whitelist logic).
     *      Prevents corrupt distributors from acting as manufacturers etc.
     */
    function assignRole(address account, bytes32 role)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        _grantRole(role, account);
        emit RoleAssigned(account, role, msg.sender);
    }

    /**
     * @dev Admin can revoke a role (blacklist / ban from black market)
     */
    function revokeUserRole(address account, bytes32 role)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        _revokeRole(role, account);
    }

    // ─── Core Functions ──────────────────────────────────────────────────────

    /**
     * @dev Step 1: Manufacturer mints a Digital Twin token for a drug batch.
     * @param drugName              Name of the drug
     * @param batchCode             Unique human-readable batch code
     * @param expiryDate            Unix timestamp of expiry
     * @param manufacturingLocation Location string (city/country)
     * @param quantity              Number of units in the batch
     * @param metadataURI           IPFS URI or off-chain metadata link
     */
    function createBatch(
        string memory drugName,
        string memory batchCode,
        uint256 expiryDate,
        string memory manufacturingLocation,
        uint256 quantity,
        string memory metadataURI
    )
        external
        onlyRole(MANUFACTURER_ROLE)
        returns (uint256)
    {
        require(bytes(drugName).length > 0,    "Drug name required");
        require(bytes(batchCode).length > 0,   "Batch code required");
        require(expiryDate > block.timestamp,  "Expiry must be in future");
        require(quantity > 0,                  "Quantity must be > 0");
        require(batchCodeToId[batchCode] == 0, "Batch code already exists");

        _batchCounter++;
        uint256 newBatchId = _batchCounter;

        batches[newBatchId] = Batch({
            batchId:               newBatchId,
            drugName:              drugName,
            batchCode:             batchCode,
            expiryDate:            expiryDate,
            manufacturingLocation: manufacturingLocation,
            manufacturer:          msg.sender,
            currentOwner:          msg.sender,
            status:                Status.MANUFACTURED,
            isRecalled:            false,
            isSold:                false,
            createdAt:             block.timestamp,
            quantity:              quantity,
            metadataURI:           metadataURI
        });

        batchCodeToId[batchCode] = newBatchId;

        // Record genesis custody
        custodyHistory[newBatchId].push(CustodyRecord({
            from:      address(0),
            to:        msg.sender,
            status:    Status.MANUFACTURED,
            timestamp: block.timestamp,
            location:  manufacturingLocation,
            notes:     "Batch minted by manufacturer"
        }));

        emit BatchMinted(newBatchId, batchCode, drugName, msg.sender, expiryDate);

        return newBatchId;
    }

    /**
     * @dev Step 2 & 3: Transfer custody of a batch.
     *      Distributor: MANUFACTURED → IN_TRANSIT
     *      Retailer:    IN_TRANSIT   → DELIVERED
     * @param batchId   The batch token ID
     * @param to        Address of the new owner
     * @param location  Current location during transfer
     * @param notes     Optional notes (e.g. "Received at Hub JFK")
     */
    function transferOwnership(
        uint256 batchId,
        address to,
        string memory location,
        string memory notes
    )
        external
    {
        Batch storage batch = batches[batchId];

        require(batch.batchId != 0,   "Batch does not exist");
        require(!batch.isRecalled,    "Batch has been recalled");
        require(!batch.isSold,        "Batch already sold - cannot transfer");
        require(batch.currentOwner == msg.sender, "Only current owner can transfer");
        require(to != address(0),     "Invalid recipient address");

        // Verify recipient has the correct next-role in the chain
        Status newStatus;

        if (batch.status == Status.MANUFACTURED) {
            require(
                hasRole(DISTRIBUTOR_ROLE, to),
                "Recipient must be a verified Distributor"
            );
            newStatus = Status.IN_TRANSIT;
        } else if (batch.status == Status.IN_TRANSIT) {
            require(
                hasRole(RETAILER_ROLE, to),
                "Recipient must be a verified Retailer"
            );
            newStatus = Status.DELIVERED;
            batch.isSold = true; // Lock: cannot be transferred again
        } else {
            revert("Batch already delivered or invalid state for transfer");
        }

        address previousOwner = batch.currentOwner;
        batch.currentOwner    = to;
        batch.status          = newStatus;

        custodyHistory[batchId].push(CustodyRecord({
            from:      previousOwner,
            to:        to,
            status:    newStatus,
            timestamp: block.timestamp,
            location:  location,
            notes:     notes
        }));

        emit OwnershipTransferred(batchId, previousOwner, to, newStatus, location);
    }

    /**
     * @dev Emergency recall — only the original manufacturer can recall.
     * @param batchId The batch to recall
     * @param reason  Human readable reason for recall
     */
    function recallBatch(uint256 batchId, string memory reason)
        external
        onlyRole(MANUFACTURER_ROLE)
    {
        Batch storage batch = batches[batchId];
        require(batch.batchId != 0,      "Batch does not exist");
        require(!batch.isRecalled,       "Already recalled");
        require(
            batch.manufacturer == msg.sender,
            "Only original manufacturer can recall"
        );

        batch.isRecalled = true;
        batch.status     = Status.RECALLED;

        custodyHistory[batchId].push(CustodyRecord({
            from:      msg.sender,
            to:        address(0),
            status:    Status.RECALLED,
            timestamp: block.timestamp,
            location:  "RECALL",
            notes:     reason
        }));

        emit BatchRecalled(batchId, batch.batchCode, msg.sender, reason);
    }

    /**
     * @dev Rejection notification: distributor rejects a batch
     *      (non-maintenance of standard temperature, spillage, etc.)
     *      Returns ownership to manufacturer and logs rejection.
     */
    function rejectBatch(uint256 batchId, string memory reason)
        external
        onlyRole(DISTRIBUTOR_ROLE)
    {
        Batch storage batch = batches[batchId];
        require(batch.batchId != 0,               "Batch does not exist");
        require(batch.status == Status.IN_TRANSIT, "Can only reject IN_TRANSIT batches");
        require(batch.currentOwner == msg.sender,  "Only current owner can reject");

        address rejector = msg.sender;
        batch.currentOwner = batch.manufacturer;
        batch.status       = Status.MANUFACTURED;

        custodyHistory[batchId].push(CustodyRecord({
            from:      rejector,
            to:        batch.manufacturer,
            status:    Status.MANUFACTURED,
            timestamp: block.timestamp,
            location:  "REJECTED",
            notes:     reason
        }));

        emit OwnershipTransferred(
            batchId,
            rejector,
            batch.manufacturer,
            Status.MANUFACTURED,
            "REJECTED"
        );
    }

    // ─── View / Verification Functions ───────────────────────────────────────

    /**
     * @dev Step 4 (Consumer): Verify a batch by ID.
     *      Returns full batch data. If isSold && scanned again → emit FraudAlert.
     */
    function verifyBatch(uint256 batchId)
        external
        returns (
            string memory drugName,
            string memory batchCode,
            address manufacturer,
            Status  status,
            bool    isRecalled,
            bool    isSold,
            uint256 expiryDate,
            uint256 quantity
        )
    {
        Batch storage batch = batches[batchId];
        require(batch.batchId != 0, "Batch does not exist");

        // Double-scan / fraud detection
        // A sold batch being scanned is suspicious — emit alert
        if (batch.isSold && batch.status == Status.DELIVERED) {
            emit FraudAlert(
                batchId,
                msg.sender,
                block.timestamp,
                "DOUBLE_SCAN"
            );
        }

        return (
            batch.drugName,
            batch.batchCode,
            batch.manufacturer,
            batch.status,
            batch.isRecalled,
            batch.isSold,
            batch.expiryDate,
            batch.quantity
        );
    }

    /**
     * @dev Lookup batch ID from a QR-encoded batch code string.
     */
    function getBatchIdByCode(string memory batchCode)
        external
        view
        returns (uint256)
    {
        uint256 id = batchCodeToId[batchCode];
        require(id != 0, "Batch code not found");
        return id;
    }

    /**
     * @dev Returns the full immutable custody history for a batch.
     */
    function getHistory(uint256 batchId)
        external
        view
        returns (CustodyRecord[] memory)
    {
        require(batches[batchId].batchId != 0, "Batch does not exist");
        return custodyHistory[batchId];
    }

    /**
     * @dev Returns full batch struct (for dashboard use).
     */
    function getBatch(uint256 batchId)
        external
        view
        returns (Batch memory)
    {
        require(batches[batchId].batchId != 0, "Batch does not exist");
        return batches[batchId];
    }

    /**
     * @dev Returns total number of batches minted.
     */
    function totalBatches() external view returns (uint256) {
        return _batchCounter;
    }

    /**
     * @dev Helper: Does an address have a specific role?
     *      Used by frontend to detect user role from wallet address.
     */
    function getRole(address account)
        external
        view
        returns (bool isManufacturer, bool isDistributor, bool isRetailer, bool isAdmin)
    {
        return (
            hasRole(MANUFACTURER_ROLE, account),
            hasRole(DISTRIBUTOR_ROLE, account),
            hasRole(RETAILER_ROLE, account),
            hasRole(DEFAULT_ADMIN_ROLE, account)
        );
    }
}

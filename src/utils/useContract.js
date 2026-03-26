import { useState, useCallback, useEffect } from "react";
import { ethers } from "ethers";
import {
  getWriteContract,
  getReadContract,
  getSigner,
  ROLES,
  STATUS_LABELS,
} from "./contract";

/**
 * useContract — Core React hook for all PharmaChain blockchain interactions.
 *
 * Usage:
 *   const {
 *     account, role, isConnected, connecting,
 *     connectWallet,
 *     createBatch, transferOwnership, recallBatch, rejectBatch,
 *     verifyBatch, getHistory, getBatch, totalBatches
 *   } = useContract();
 */
export function useContract() {
  const [account, setAccount]     = useState(null);
  const [role, setRole]           = useState(null);   // 'manufacturer' | 'distributor' | 'retailer' | 'admin' | null
  const [isConnected, setIsConnected] = useState(false);
  const [connecting, setConnecting]   = useState(false);
  const [error, setError]         = useState(null);

  // ─── Connect Wallet ─────────────────────────────────────────────────────

  const connectWallet = useCallback(async () => {
    setConnecting(true);
    setError(null);
    try {
      if (!window.ethereum) {
        throw new Error("MetaMask not installed");
      }
      const signer  = await getSigner();
      const address = await signer.getAddress();
      setAccount(address);
      setIsConnected(true);

      // Detect role from chain
      const contract = await getReadContract();
      const [isManufacturer, isDistributor, isRetailer, isAdmin] =
        await contract.getRole(address);

      if (isAdmin)         setRole("admin");
      else if (isManufacturer) setRole("manufacturer");
      else if (isDistributor)  setRole("distributor");
      else if (isRetailer)     setRole("retailer");
      else                     setRole(null);

      return { address, role };
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setConnecting(false);
    }
  }, []);

  // Listen for MetaMask account changes
  useEffect(() => {
    if (!window.ethereum) return;
    const onAccountChange = () => { setIsConnected(false); setAccount(null); setRole(null); };
    window.ethereum.on("accountsChanged", onAccountChange);
    return () => window.ethereum.removeListener("accountsChanged", onAccountChange);
  }, []);

  // ─── Write Functions ─────────────────────────────────────────────────────

  /**
   * Manufacturer mints a new batch.
   * Returns { batchId, txHash }
   */
  const createBatch = useCallback(async ({
    drugName, batchCode, expiryDate, location, quantity, metadataURI = ""
  }) => {
    const contract = await getWriteContract();
    const expiryTimestamp = Math.floor(new Date(expiryDate).getTime() / 1000);
    const tx = await contract.createBatch(
      drugName, batchCode, expiryTimestamp, location, quantity, metadataURI
    );
    const receipt = await tx.wait();

    // Parse BatchMinted event
    const event = receipt.logs
      .map((log) => { try { return contract.interface.parseLog(log); } catch { return null; } })
      .find((e) => e?.name === "BatchMinted");

    const batchId = event ? event.args[0].toString() : null;
    return { batchId, txHash: receipt.hash };
  }, []);

  /**
   * Transfer ownership to next party in chain.
   * Returns { txHash }
   */
  const transferOwnership = useCallback(async ({ batchId, toAddress, location, notes = "" }) => {
    const contract = await getWriteContract();
    const tx = await contract.transferOwnership(batchId, toAddress, location, notes);
    const receipt = await tx.wait();
    return { txHash: receipt.hash };
  }, []);

  /**
   * Manufacturer recalls a batch.
   */
  const recallBatch = useCallback(async ({ batchId, reason }) => {
    const contract = await getWriteContract();
    const tx = await contract.recallBatch(batchId, reason);
    const receipt = await tx.wait();
    return { txHash: receipt.hash };
  }, []);

  /**
   * Distributor rejects a batch.
   */
  const rejectBatch = useCallback(async ({ batchId, reason }) => {
    const contract = await getWriteContract();
    const tx = await contract.rejectBatch(batchId, reason);
    const receipt = await tx.wait();
    return { txHash: receipt.hash };
  }, []);

  // ─── Read Functions ──────────────────────────────────────────────────────

  /**
   * Verify a batch by ID (triggers fraud detection on chain).
   * Returns formatted batch data.
   */
  const verifyBatch = useCallback(async (batchId) => {
    const contract = await getWriteContract(); // needs signer to emit FraudAlert
    const result = await contract.verifyBatch(batchId);
    return {
      drugName:    result[0],
      batchCode:   result[1],
      manufacturer: result[2],
      status:      Number(result[3]),
      statusLabel: STATUS_LABELS[Number(result[3])],
      isRecalled:  result[4],
      isSold:      result[5],
      expiryDate:  new Date(Number(result[6]) * 1000).toLocaleDateString(),
      quantity:    Number(result[7]),
    };
  }, []);

  /**
   * Get full custody history for a batch.
   */
  const getHistory = useCallback(async (batchId) => {
    const contract = await getReadContract();
    const history = await contract.getHistory(batchId);
    return history.map((entry) => ({
      from:      entry.from,
      to:        entry.to,
      status:    Number(entry.status),
      statusLabel: STATUS_LABELS[Number(entry.status)],
      timestamp: new Date(Number(entry.timestamp) * 1000).toLocaleString(),
      location:  entry.location,
      notes:     entry.notes,
    }));
  }, []);

  /**
   * Get a full batch struct by ID.
   */
  const getBatch = useCallback(async (batchId) => {
    const contract = await getReadContract();
    const b = await contract.getBatch(batchId);
    return {
      batchId:               b.batchId.toString(),
      drugName:              b.drugName,
      batchCode:             b.batchCode,
      expiryDate:            new Date(Number(b.expiryDate) * 1000).toLocaleDateString(),
      manufacturingLocation: b.manufacturingLocation,
      manufacturer:          b.manufacturer,
      currentOwner:          b.currentOwner,
      status:                Number(b.status),
      statusLabel:           STATUS_LABELS[Number(b.status)],
      isRecalled:            b.isRecalled,
      isSold:                b.isSold,
      createdAt:             new Date(Number(b.createdAt) * 1000).toLocaleString(),
      quantity:              Number(b.quantity),
      metadataURI:           b.metadataURI,
    };
  }, []);

  /**
   * Lookup batchId from QR-encoded batchCode string.
   */
  const getBatchIdByCode = useCallback(async (batchCode) => {
    const contract = await getReadContract();
    const id = await contract.getBatchIdByCode(batchCode);
    return id.toString();
  }, []);

  /**
   * Total batches minted (for dashboard stats).
   */
  const totalBatches = useCallback(async () => {
    const contract = await getReadContract();
    return Number(await contract.totalBatches());
  }, []);

  return {
    // Wallet state
    account,
    role,
    isConnected,
    connecting,
    error,
    connectWallet,

    // Write operations
    createBatch,
    transferOwnership,
    recallBatch,
    rejectBatch,

    // Read operations
    verifyBatch,
    getHistory,
    getBatch,
    getBatchIdByCode,
    totalBatches,
  };
}

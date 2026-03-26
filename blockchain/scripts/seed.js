const hre = require("hardhat");
const fs  = require("path");

async function main() {
  console.log("🌱 Seeding PharmaChain with demo data...\n");

  const signers = await hre.ethers.getSigners();
  const deployer     = signers[0]; // admin + manufacturer
  const distributor  = signers[1]; // distributor
  const retailer     = signers[2]; // retailer / pharmacist

  // Load deployed address
  const deploymentFile = require("../deployments/localhost.json");
  const abiFile = require("../artifacts/contracts/PharmaChain.sol/PharmaChain.json");

  const contract = new hre.ethers.Contract(
    deploymentFile.address,
    abiFile.abi,
    deployer
  );

  console.log("📋 Contract:", deploymentFile.address);
  console.log("👤 Admin/Manufacturer:", deployer.address);
  console.log("🚚 Distributor:", distributor.address);
  console.log("🏪 Retailer:", retailer.address);
  console.log();

  // ─── Assign Roles ────────────────────────────────────────────────────────

  const DISTRIBUTOR_ROLE = hre.ethers.keccak256(
    hre.ethers.toUtf8Bytes("DISTRIBUTOR_ROLE")
  );
  const RETAILER_ROLE = hre.ethers.keccak256(
    hre.ethers.toUtf8Bytes("RETAILER_ROLE")
  );
  const MANUFACTURER_ROLE = hre.ethers.keccak256(
    hre.ethers.toUtf8Bytes("MANUFACTURER_ROLE")
  );

  console.log("🔐 Assigning roles...");
  await (await contract.assignRole(distributor.address, DISTRIBUTOR_ROLE)).wait();
  console.log("  ✅ Distributor role assigned to", distributor.address);
  await (await contract.assignRole(retailer.address, RETAILER_ROLE)).wait();
  console.log("  ✅ Retailer role assigned to", retailer.address);

  // ─── Create Batches ──────────────────────────────────────────────────────

  const now = Math.floor(Date.now() / 1000);
  const oneYear = 365 * 24 * 60 * 60;

  const batches = [
    {
      drugName: "Amoxicillin 500mg",
      batchCode: "BATCH-AMX-2024-001",
      expiryDate: now + oneYear,
      location: "Mumbai, India",
      quantity: 10000,
      metadataURI: "ipfs://QmAmoxicillin001",
    },
    {
      drugName: "Paracetamol 650mg",
      batchCode: "BATCH-PCM-2024-002",
      expiryDate: now + oneYear * 2,
      location: "Hyderabad, India",
      quantity: 50000,
      metadataURI: "ipfs://QmParacetamol002",
    },
    {
      drugName: "Calpol 250mg Suspension",
      batchCode: "BATCH-CAL-2024-003",
      expiryDate: now + oneYear,
      location: "Pune, India",
      quantity: 5000,
      metadataURI: "ipfs://QmCalpol003",
    },
  ];

  console.log("\n📦 Minting drug batches...");
  const batchIds = [];
  for (const b of batches) {
    const tx = await contract.createBatch(
      b.drugName, b.batchCode, b.expiryDate, b.location, b.quantity, b.metadataURI
    );
    const receipt = await tx.wait();
    // Parse event to get batchId
    const event = receipt.logs
      .map((log) => { try { return contract.interface.parseLog(log); } catch { return null; } })
      .find((e) => e && e.name === "BatchMinted");
    const batchId = event ? event.args[0] : null;
    batchIds.push(batchId);
    console.log(`  ✅ Minted "${b.drugName}" → BatchID: ${batchId}, Code: ${b.batchCode}`);
  }

  // ─── Simulate Full Flow for Batch 1 (Amoxicillin) ───────────────────────

  console.log("\n🔄 Simulating full supply chain for Batch 1 (Amoxicillin)...");

  // TX 2: Manufacturer → Distributor
  const tx2 = await contract.transferOwnership(
    batchIds[0],
    distributor.address,
    "Delhi Cold Storage Hub",
    "Handed over to SwiftCare Logistics"
  );
  await tx2.wait();
  console.log("  ✅ TX 2: Ownership → Distributor (IN_TRANSIT)");

  // TX 3: Distributor → Retailer
  const contractAsDistributor = contract.connect(distributor);
  const tx3 = await contractAsDistributor.transferOwnership(
    batchIds[0],
    retailer.address,
    "Apollo Pharmacy, Connaught Place, Delhi",
    "Delivered to retailer — cold chain maintained"
  );
  await tx3.wait();
  console.log("  ✅ TX 3: Ownership → Retailer (DELIVERED)");

  // ─── Simulate Rejection for Batch 2 (Paracetamol) ───────────────────────

  console.log("\n❌ Simulating rejection for Batch 2 (Paracetamol)...");
  const tx2b = await contract.transferOwnership(
    batchIds[1],
    distributor.address,
    "Chennai Hub",
    "Initial transfer"
  );
  await tx2b.wait();

  const tx_reject = await contractAsDistributor.rejectBatch(
    batchIds[1],
    "Temperature breach: stored above 30°C for >4 hours"
  );
  await tx_reject.wait();
  console.log("  ✅ Batch 2 rejected — returned to manufacturer");

  // Batch 3: remains in MANUFACTURED state (for demo)
  console.log("\n📌 Batch 3 (Calpol) left in MANUFACTURED state for demo.");

  console.log("\n✨ Seed complete! Summary:");
  console.log("  Batch 1 (Amoxicillin): DELIVERED ✅");
  console.log("  Batch 2 (Paracetamol): REJECTED / back to MANUFACTURED ❌");
  console.log("  Batch 3 (Calpol):       MANUFACTURED (awaiting distributor) 🏭");

  console.log("\n📝 Demo addresses:");
  console.log("  Admin/Manufacturer:", deployer.address);
  console.log("  Distributor:", distributor.address);
  console.log("  Retailer:", retailer.address);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  });

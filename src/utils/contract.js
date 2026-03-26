import { ethers } from "ethers";
import PharmaChainABI from "./PharmaChainABI.json";

// ─── Contract Address ───────────────────────────────────────────────────────
// This is auto-updated by blockchain/scripts/deploy.js
// For local Hardhat: run deploy then this file is rewritten automatically
// For Sepolia: update manually or via deploy script

let CONTRACT_ADDRESS = "";
let CHAIN_ID = 31337; // default: local Hardhat

// Try to dynamically load from contractAddress.js if it exists
try {
  const mod = await import("./contractAddress.js");
  CONTRACT_ADDRESS = mod.CONTRACT_ADDRESS;
  CHAIN_ID = mod.CHAIN_ID;
} catch {
  // Not yet deployed — warn in console
  console.warn(
    "[PharmaChain] Contract address not found. Run `npm run deploy:local` in blockchain/ first."
  );
}

export { CONTRACT_ADDRESS, CHAIN_ID };
export const ABI = PharmaChainABI;

// ─── Provider / Signer Helpers ──────────────────────────────────────────────

/**
 * Returns a read-only provider (no wallet needed).
 * Used for view-only calls like verifyBatch, getHistory.
 */
export function getReadProvider() {
  if (typeof window !== "undefined" && window.ethereum) {
    return new ethers.BrowserProvider(window.ethereum);
  }
  // Fallback to local node for development
  return new ethers.JsonRpcProvider("http://127.0.0.1:8545");
}

/**
 * Returns a signer (requires MetaMask to be connected).
 */
export async function getSigner() {
  if (!window.ethereum) {
    throw new Error("MetaMask not found. Please install MetaMask to use PharmaChain.");
  }
  const provider = new ethers.BrowserProvider(window.ethereum);
  // Request account access
  await provider.send("eth_requestAccounts", []);
  return provider.getSigner();
}

/**
 * Returns a read-only contract instance.
 */
export async function getReadContract() {
  const provider = getReadProvider();
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
}

/**
 * Returns a write-capable contract instance (signer attached).
 * Will prompt MetaMask if not connected.
 */
export async function getWriteContract() {
  const signer = await getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
}

// ─── Role Bytes32 Constants ─────────────────────────────────────────────────

export const ROLES = {
  MANUFACTURER: ethers.keccak256(ethers.toUtf8Bytes("MANUFACTURER_ROLE")),
  DISTRIBUTOR:  ethers.keccak256(ethers.toUtf8Bytes("DISTRIBUTOR_ROLE")),
  RETAILER:     ethers.keccak256(ethers.toUtf8Bytes("RETAILER_ROLE")),
  ADMIN:        ethers.ZeroHash, // DEFAULT_ADMIN_ROLE is bytes32(0)
};

// ─── Status Labels ──────────────────────────────────────────────────────────

export const STATUS_LABELS = {
  0: "MANUFACTURED",
  1: "IN_TRANSIT",
  2: "DELIVERED",
  3: "RECALLED",
};

export const STATUS_COLORS = {
  0: "#00346f",   // primary blue
  1: "#f59e0b",   // amber
  2: "#16a34a",   // green
  3: "#dc2626",   // red
};

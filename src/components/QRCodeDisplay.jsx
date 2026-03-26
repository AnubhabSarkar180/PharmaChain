import React, { useEffect, useRef, useState } from "react";
import QRCodeLib from "qrcode";

/**
 * QRCodeDisplay — Generates and renders a QR code for a PharmaChain batch.
 *
 * The QR encodes a URL: `<baseUrl>/consumer?batch=<batchCode>`
 * Consumer scans this → Consumer Verification Portal auto-loads the batch.
 */
export default function QRCodeDisplay({
  batchCode,
  batchId,
  drugName,
  size = 200,
  showDownload = true,
  baseUrl = window.location.origin,
}) {
  const canvasRef = useRef(null);
  const [dataUrl, setDataUrl] = useState(null);

  const verifyUrl = `${baseUrl}/consumer?batch=${batchCode}`;

  useEffect(() => {
    if (!batchCode || !canvasRef.current) return;

    QRCodeLib.toCanvas(
      canvasRef.current,
      verifyUrl,
      {
        width: size,
        margin: 2,
        color: {
          dark: "#00346f",   // primary blue (matches design system)
          light: "#ffffff",
        },
        errorCorrectionLevel: "H",   // High: 30% damage tolerance
      },
      (err) => {
        if (err) console.error("[QR] Generation error:", err);
      }
    );

    // Also generate data URL for download button
    QRCodeLib.toDataURL(verifyUrl, {
      width: size * 2,
      margin: 2,
      color: { dark: "#00346f", light: "#ffffff" },
      errorCorrectionLevel: "H",
    }).then(setDataUrl);
  }, [batchCode, verifyUrl, size]);

  const handleDownload = () => {
    if (!dataUrl) return;
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `pharmachain-qr-${batchCode}.png`;
    link.click();
  };

  if (!batchCode) {
    return (
      <div className="flex items-center justify-center bg-surface-container-low rounded-xl p-8 text-on-surface-variant">
        No batch selected
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-white p-4 rounded-2xl shadow-lg border border-surface-container-high">
        <canvas ref={canvasRef} className="block" />
      </div>

      <div className="text-center">
        <p className="font-headline font-bold text-on-surface text-sm">{drugName}</p>
        <p className="font-mono text-xs text-on-surface-variant mt-1">{batchCode}</p>
        <p className="text-[10px] text-on-surface-variant/60 mt-1 break-all max-w-[200px]">
          {verifyUrl}
        </p>
      </div>

      {showDownload && (
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-surface-container-low hover:bg-surface-container-high transition-all px-4 py-2 rounded-lg text-sm font-label font-bold text-on-surface-variant uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-sm">download</span>
          Download QR
        </button>
      )}
    </div>
  );
}

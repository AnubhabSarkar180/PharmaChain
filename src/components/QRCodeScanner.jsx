import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

/**
 * QRCodeScanner — Camera-based QR code scanner.
 *
 * When a QR is scanned, it attempts to parse the PharmaChain verify URL
 * and extract the batchCode, then calls onScan({ batchCode, raw }).
 *
 * Double-scan fraud detection is handled on-chain in verifyBatch().
 */
export default function QRCodeScanner({ onScan, onError }) {
  const scannerRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [scannedValue, setScannedValue] = useState(null);

  const SCANNER_ID = "pharmachain-qr-scanner";

  useEffect(() => {
    return () => {
      // Cleanup camera on unmount
      if (scannerRef.current) {
        scannerRef.current.stop().catch(() => {});
      }
    };
  }, []);

  const startScanner = async () => {
    setCameraError(null);
    try {
      const html5QrCode = new Html5Qrcode(SCANNER_ID);
      scannerRef.current = html5QrCode;

      await html5QrCode.start(
        { facingMode: "environment" }, // rear camera preferred
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1.0,
        },
        (decodedText) => {
          // Success callback
          setScannedValue(decodedText);
          setIsRunning(false);
          html5QrCode.stop();

          // Parse batchCode from URL
          let batchCode = decodedText;
          try {
            const url    = new URL(decodedText);
            const param  = url.searchParams.get("batch");
            if (param) batchCode = param;
          } catch {}

          onScan({ batchCode, raw: decodedText });
        },
        (errorMsg) => {
          // Ignore intermediate scan errors (not-found frames)
        }
      );

      setIsRunning(true);
    } catch (err) {
      setCameraError(err.message || "Camera access denied");
      if (onError) onError(err);
    }
  };

  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.stop().catch(() => {});
    }
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Scanner viewport */}
      <div className="relative w-full max-w-sm">
        <div
          id={SCANNER_ID}
          className="rounded-2xl overflow-hidden bg-black"
          style={{ minHeight: isRunning ? "300px" : "0px" }}
        />

        {/* Corner guides overlay */}
        {isRunning && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-56 h-56 relative">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-primary rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-primary rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-primary rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-primary rounded-br-lg" />
            </div>
          </div>
        )}
      </div>

      {/* Status */}
      {cameraError && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm text-center max-w-sm">
          <span className="material-symbols-outlined text-sm mr-1">error</span>
          {cameraError}
        </div>
      )}

      {scannedValue && (
        <div className="bg-tertiary-container text-on-tertiary-container rounded-xl p-4 text-sm text-center max-w-sm">
          <span className="material-symbols-outlined text-sm mr-1">check_circle</span>
          QR scanned — verifying on chain...
        </div>
      )}

      {/* Control buttons */}
      {!isRunning ? (
        <button
          onClick={startScanner}
          className="flex items-center gap-2 bg-primary text-on-primary font-headline font-bold px-8 py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg"
        >
          <span className="material-symbols-outlined">qr_code_scanner</span>
          Scan QR Code
        </button>
      ) : (
        <button
          onClick={stopScanner}
          className="flex items-center gap-2 bg-surface-container-high text-on-surface font-headline font-bold px-8 py-4 rounded-xl hover:bg-surface-container-highest active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined">stop</span>
          Stop Scanner
        </button>
      )}
    </div>
  );
}

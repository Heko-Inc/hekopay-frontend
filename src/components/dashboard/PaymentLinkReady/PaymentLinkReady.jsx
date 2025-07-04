import React, { useState } from "react";
import MarketPlaceLayout from "../../../layouts/MarketPlaceLayout.jsx/MarketPlaceLayout";
import { ClipboardCopy } from "lucide-react";
import QrCodeSample from "../../../assets/images/QrCode.png";

const PaymentLinkReady = () => {
  const paymentLink = "https://hekoinc.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paymentLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); 
  };

  return (
    <MarketPlaceLayout>
      <div className="min-h-[80vh] flex justify-center items-center px-4">
        <div className="w-full max-w-[700px] bg-white p-8 rounded-xl space-y-6">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-purple-700">
              Your Payment Link is Ready
            </h2>
            <p className="text-gray-600 text-sm">
              Share this link with your customer to receive payment instantly.
            </p>
          </div>

         
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700">Share Link</h3>
            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <input
                  type="text"
                  readOnly
                  value={paymentLink}
                  className="flex-grow px-4 py-2 text-sm text-gray-700 bg-gray-50 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="p-2 bg-purple-600 hover:bg-purple-700 text-white"
                  aria-label="Copy to clipboard"
                >
                  <ClipboardCopy size={18} />
                </button>
              </div>
              {copied && (
                <span className="absolute -top-6 right-0 text-xs text-green-600 transition-opacity duration-300">
                  Copied!
                </span>
              )}
            </div>
          </div>

         
          <div className="flex items-center">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

         
          <div className="text-center space-y-2">
            <h3 className="text-sm font-medium text-gray-700">
              Scan to get paid
            </h3>
            <div className="mx-auto max-w-[300px] rounded-lg border border-dashed border-gray-400 bg-white p-4 shadow-sm">
              <img
                src={QrCodeSample}
                alt="QR Code"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </MarketPlaceLayout>
  );
};

export default PaymentLinkReady;

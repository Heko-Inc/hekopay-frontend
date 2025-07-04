import React, { useState } from "react";
import ImagePlaceholder from "../../../assets/images/gas.png";
import OneTermPassword from "../OneTermPassword/OneTermPassword";

const HekoPaymentSuccessful = ({ setPaymentSuccesful }) => {
  const [showOneTermPassword, setShowOneTermPassword] = useState(false);

  const handleConfirm = () => {
     
    setShowOneTermPassword(true);         
  };

  return (
    <>
      {!showOneTermPassword && (
        <div className="bg-black/50 fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-[90%] max-w-[700px] space-y-6">
          


            <div className="text-center space-y-2">
              <h4 className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                Make a payment of
              </h4>
              <h2 className="text-3xl font-bold text-gray-800">KES 1,500.00</h2>
              <p className="text-gray-500">to</p>

              <div className="flex items-center justify-start gap-4 mt-4">
                <div className="w-16 h-16">
                  <img
                    src={ImagePlaceholder}
                    alt="Retail Logo"
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Marcos Retail
                  </h2>
                  <h3 className="text-sm text-gray-500">ID: 102442</h3>
                </div>
              </div>
            </div>

          
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between">
                <p className="font-medium">Amount</p>
                <p>KES 1,500.00</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Transaction Cost</p>
                <p>KES 0.00</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Transaction Saved</p>
                <p>KES 1,500.00</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Payment Method</p>
                <p>HekoPay</p>
              </div>
            </div>

          

            <button
              className="bg-purple-600 hover:bg-purple-700 text-white w-full py-2 rounded-lg transition"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      )}


      {showOneTermPassword && (
        <OneTermPassword setShowOneTermPassword={setShowOneTermPassword} />
      )}
    </>
  );
};

export default HekoPaymentSuccessful;

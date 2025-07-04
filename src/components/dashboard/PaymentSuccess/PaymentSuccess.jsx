import React from "react";

import { useNavigate } from "react-router-dom";

import MarketPlaceLayout from "../../../layouts/MarketPlaceLayout.jsx/MarketPlaceLayout";

import CongratulationsImage from "../../../assets/images/image160.png";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/marketplace");
  };

  return (
    <MarketPlaceLayout>
      <div className="w-full max-w-[700px] bg-white p-6  mx-auto mt-12 space-y-6 ">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">
            Payment Successful!
          </h2>
          <p className="text-gray-600">
            Payment to Marcos Rental was successful
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={CongratulationsImage}
            alt="Congratulations"
            className="w-[250px] h-[250px] object-contain"
          />
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
          Done
        </button>
      </div>
    </MarketPlaceLayout>
  );
};

export default PaymentSuccess;

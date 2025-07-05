import React, { useState } from "react";

import MarketPlaceLayout from "../../../layouts/MarketPlaceLayout.jsx/MarketPlaceLayout";

import ImagePlaceHolder from "../../../assets/images/gas.png";

import HekoPaymentSuccessful from "../../../components/dashboard/HekoPayPaymentSuccessful/HekoPayPaymentSuccessful";

const PayViaMpesaTill = () => {
  const [paymentSuccessful, setPaymentSuccesful] = useState(false);
  const [tillNumber, setTillNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!tillNumber.trim()) {
      newErrors.tillNumber = "Till number is required";
    }
    if (!amount.trim()) {
      newErrors.amount = "Amount is required";
    } else if (isNaN(amount) || Number(amount) <= 0) {
      newErrors.amount = "Enter a valid amount";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setPaymentSuccesful(true);
      console.log("Payment submitted:", { tillNumber, amount });
    }
  };

  return (
    <MarketPlaceLayout>
      <div className="min-h-[80vh] flex justify-center items-center px-4 py-8">
        <div className="w-full max-w-[700px] bg-white p-6 rounded-xl shadow-custom-least space-y-8">
          {/* Favorites */}
          <div>
            <h2 className="text-2xl font-semibold text-center text-purple-700 mb-4">
              Favorites
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                "Shoppers retail",
                "K-GAS",
                "Mama's grocery",
                "Add to favourites",
              ].map((name, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-50 p-2 rounded-lg hover:shadow transition"
                >
                  <img
                    src={ImagePlaceHolder}
                    alt={name}
                    className="w-full h-20 object-contain mb-2"
                  />
                  <h3 className="text-sm font-medium text-gray-700">{name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-center text-purple-700">
              Pay to MPesa Till
            </h2>

            {/* Till Number */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Till number
              </label>
              <input
                type="text"
                value={tillNumber}
                onChange={(e) => setTillNumber(e.target.value)}
                placeholder="Enter till number"
                className={`w-full border px-4 py-2 rounded-lg focus:outline-none ${
                  errors.tillNumber
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-purple-500"
                }`}
              />
              {errors.tillNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.tillNumber}</p>
              )}
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Amount</label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className={`w-full border px-4 py-2 rounded-lg focus:outline-none ${
                  errors.amount
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-purple-500"
                }`}
              />
              {errors.amount && (
                <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition"
            >
              Pay
            </button>
          </form>
        </div>
      </div>

      {/* Payment Success Modal */}
      {paymentSuccessful && (
        <HekoPaymentSuccessful setPaymentSuccesful={setPaymentSuccesful} />
      )}
    </MarketPlaceLayout>
  );
};

export default PayViaMpesaTill;

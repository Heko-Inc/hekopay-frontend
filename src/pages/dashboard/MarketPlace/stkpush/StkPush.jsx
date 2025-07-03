import React, { useState } from "react";
import MarketPlaceLayout from "../../../../layouts/MarketPlaceLayout.jsx/MarketPlaceLayout";
import PaymentSuccessfull from "../../../../components/dashboard/PaymentSuccessfull/PaymentSuccessfull";

const StkPush = () => {
  const [paymentSuccessful, setPaymentSuccesful] = useState(false);
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!phone.match(/^07\d{8}$/)) {
      newErrors.phone = "Enter a valid Safaricom number (e.g., 07XXXXXXXX)";
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      newErrors.amount = "Enter a valid amount greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setPaymentSuccesful(true);
    }
  };

  return (
    <MarketPlaceLayout>
      <div className="h-[80vh] flex justify-center items-center px-4">
        <div className="w-full max-w-[700px] bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-purple-700">
            Send an STK Push
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className={`w-full border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? "focus:ring-red-500"
                    : "focus:ring-purple-500"
                }`}
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className={`w-full border ${
                  errors.amount ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.amount
                    ? "focus:ring-red-500"
                    : "focus:ring-purple-500"
                }`}
              />
              {errors.amount && (
                <p className="text-sm text-red-500 mt-1">{errors.amount}</p>
              )}
            </div>

            <button type="submit" className="btn-secondary w-full">
              Send STK Push
            </button>
          </form>
        </div>
      </div>

      {paymentSuccessful && (
        <PaymentSuccessfull setPaymentSuccesful={setPaymentSuccesful} />
      )}
    </MarketPlaceLayout>
  );
};

export default StkPush;

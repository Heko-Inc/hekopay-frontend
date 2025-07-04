import React from "react";

import { useNavigate } from "react-router-dom";

const OneTermPassword = ({ setShowOneTermPassword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("OTP verified");

    setShowOneTermPassword(false);
  };

  const navigate = useNavigate();

  return (
    <div className="bg-black/50 fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-[700px] space-y-6 relative">
        <button
          className="absolute top-4 left-4 text-purple-600 font-semibold text-sm"
          onClick={() => setShowOneTermPassword(false)}
        >
          ← Back
        </button>

        <div className="text-center space-y-2 mt-6">
          <h4 className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            One-Time Password
          </h4>
          <p className="text-gray-600">An OTP has been sent to your email</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="otpCode"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter code
            </label>
            <input
              type="text"
              id="otpCode"
              placeholder="Enter the 6-digit code"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <p className="text-sm text-gray-600">
            Didn’t receive a code?{" "}
            <span className="text-yellow-500 cursor-pointer">Resend</span>
          </p>

          <button
            type="submit"
            className="btn-secondary w-full mt-4"
            onClick={() => {
              navigate("/payments/success");
            }}
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default OneTermPassword;

import React from "react";

const PaymentSuccessfull = ({ setPaymentSuccesful }) => {
  return (
    <div className="bg-black/50 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-[90%] max-w-[700px] space-y-6">
        <div className="text-center space-y-2">
          <h4 className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Payment was successful
          </h4>
          <h2 className="text-3xl font-bold text-gray-800">KES 1,500.00</h2>
          <p className="text-gray-500">You have received KES 1,500</p>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex justify-between">
            <p className="font-medium">Amount Received</p>
            <p>KES 1,500.00</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">Transaction Cost</p>
            <p>KES 0.00</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">Total Received</p>
            <p>KES 1,500.00</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">Payment Method</p>
            <p>MPESA</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">Payment ID</p>
            <p>TXN123456</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">Payment Number</p>
            <p>0713174493</p>
          </div>
        </div>

        <button
          className="btn-secondary w-full mt-4"
          onClick={() => {
            setPaymentSuccesful(false);
          }}
        >
          ok
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessfull;

import React from "react";
import { useNavigate } from "react-router-dom";

const CreateFrequentLink = ({ setShowCreateFrequentLink }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/marketplace/payment-link/frequent-link");
  };

  return (
    <div className="bg-black/50 fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-[700px] space-y-6 relative">
        {/* Close/Back Button */}
        <button
          className="btn-primary absolute top-4 left-4"
          onClick={() => setShowCreateFrequentLink(false)}
          aria-label="Close Modal"
        >
          ← Back
        </button>

        {/* Title & Description */}
        <div className="text-center space-y-2 mt-6">
          <h4 className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Create a Frequent Link
          </h4>
          <p className="text-gray-600">
            Set up a recurring payment link for a regular customer.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="linkName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Link Name
            </label>
            <input
              type="text"
              id="linkName"
              placeholder="e.g., School Fees"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Amount (optional)
            </label>
            <input
              type="number"
              id="amount"
              placeholder="e.g., 1000"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button type="submit" className="btn-secondary w-full mt-4">
            Create Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateFrequentLink;

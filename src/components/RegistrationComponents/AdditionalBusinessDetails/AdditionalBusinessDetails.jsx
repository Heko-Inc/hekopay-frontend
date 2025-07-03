import React from "react";

const AdditionalBusinessDetails = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white  rounded-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Additional Business Details
      </h2>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Verifiable Website Address
          </label>
          <input
            type="text"
            placeholder="Enter website address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Social Media Link (optional)
          </label>
          <input
            type="text"
            placeholder="e.g. https://twitter.com/yourbusiness"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Category
          </label>
          <input
            type="text"
            placeholder="e.g. Retail"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Sub-category
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option value="">Select sub-category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="services">Services</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdditionalBusinessDetails;

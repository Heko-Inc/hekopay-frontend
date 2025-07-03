import React from "react";
import { Upload } from "lucide-react";

const BusinessDocs = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Business Documents
      </h2>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            KRA Tax Number
          </label>
          <input
            type="text"
            placeholder="Enter KRA PIN or tax number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload KRA Tax Clearance Certificate
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 flex items-center justify-center hover:border-purple-500 transition">
          <button
              type="button"
              className="flex justify-between items-center gap-2 text-purple-600 hover:text-purple-800 focus:outline-none w-full"
            >
              <Upload className="w-5 h-5" />
              <span>Browse files or drag and drop (PNG, JPEG, PDF)</span>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Business Registration Certificate
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 flex items-center justify-center hover:border-purple-500 transition">
            <button
              type="button"
              className="flex justify-between items-center gap-2 text-purple-600 hover:text-purple-800 focus:outline-none w-full"
            >
              <Upload className="w-5 h-5" />
              <span>Browse files or drag and drop (PNG, JPEG, PDF)</span>
            </button>
          </div>
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

export default BusinessDocs;

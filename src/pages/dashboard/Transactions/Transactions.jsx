import React from "react";
import DashboardLayout from "../dashboardLayout/dashboardLayout";
import MerchantDesc from "../../../components/dashboard/MerchantDesc/MerchantDesc";
import { Eye } from "lucide-react";
import RecentTransactions from "../../../components/dashboard/RecentTransactions/RecentTransactions";

const Transactions = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-6">
            <MerchantDesc />

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-gray-700">Cash In</h2>
                <h3 className="text-xl font-bold text-purple-800">
                  Ksh 326,890.00
                </h3>
                <Eye className="text-gray-500 w-5 h-5" />
              </div>

              <div className="p-4 bg-white rounded-md shadow-sm">
                <h2 className="text-sm font-semibold text-gray-700">
                  Cash Out
                </h2>
                <h3 className="text-xl font-bold text-purple-800">
                  Ksh 326,890.00
                </h3>
                <Eye className="text-gray-500 w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-md shadow-sm p-4">
            <h3 className="text-lg font-semibold mb-4">Chart Overview</h3>
          </div>
        </div>
        <RecentTransactions />
      </div>
    </DashboardLayout>
  );
};

export default Transactions;

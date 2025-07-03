import React from "react";
import { Eye, DollarSign } from "lucide-react";
const MainDashboardGrid = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Your Balance", amount: "Ksh 326,800.00" },
            { title: "Cash Out", amount: "Ksh 626,800.00" },
            { title: "BNCT", amount: "Ksh 326,800.00" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow flex flex-col gap-2"
            >
              <h2 className="text-sm font-semibold text-gray-700">
                {item.title}
              </h2>
              <h3 className="text-xl font-bold text-purple-800">
                {item.amount}
              </h3>
              <Eye className="text-gray-500 w-5 h-5" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Send Money", "Deposit", "Deposit Payment", "Make Payment"].map(
            (action, idx) => (
              <div
                key={idx}
                className="bg-purple-100 hover:bg-purple-200 transition p-4 rounded-xl flex flex-col items-center justify-center gap-2"
              >
                <DollarSign className="text-purple-700 w-6 h-6" />
                <h2 className="text-sm font-medium text-purple-800">
                  {action}
                </h2>
              </div>
            )
          )}
        </div>
      </div>

      <div className="w-full lg:w-1/3 bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-bold mb-2">BNCT Overview</h2>
        <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-gray-400">
          Graph Placeholder
        </div>
      </div>
    </div>
  );
};

export default MainDashboardGrid;

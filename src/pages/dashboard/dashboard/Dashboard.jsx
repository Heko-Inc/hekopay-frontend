import React from "react";
import DashboardLayout from "../dashboardLayout/dashboardLayout";
import MainDashboardGrid from "../../../components/dashboard/MainDashboardGrid/MainDashboardGrid";
import InsurancePlaceholder from "../../../assets/images/desktop.png";
import MerchantDesc from "../../../components/dashboard/MerchantDesc/MerchantDesc";
import RecentTransactions from "../../../components/dashboard/RecentTransactions/RecentTransactions";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <MerchantDesc/>
        <MainDashboardGrid />
        <div className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-xl shadow">
          {/* Insurance Card */}
          <div className="w-full md:w-1/4">
            <img
              src={InsurancePlaceholder}
              alt="APA Insurance"
              className="w-full h-auto rounded-lg object-cover max-h-[250px]"
            />
          </div>

          {/* Insurance Details and Transactions */}
          <div className="flex flex-col justify-between w-full md:w-3/4 space-y-4">
            <div>
              <h2 className="text-xl font-bold text-purple-800">
                APA Insurance
              </h2>
              <h3 className="text-md text-gray-700">By APA Group</h3>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                <div className="bg-purple-600 h-3 rounded-full w-[60%]" />
              </div>

              <p className="text-sm text-gray-600 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                dolorum. Secure your future with our trusted insurance plans.
              </p>
            </div>

            {/* Recent Transactions */}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-2 text-purple-700 ">Recent Transactions</h3>
          <h4 className="text-sm  mb-4 border-b-4 border-purple-700 inline-block text-purple-600">All Transactions</h4>
         <RecentTransactions/>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

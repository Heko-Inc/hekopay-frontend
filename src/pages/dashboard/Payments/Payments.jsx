import React from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../dashboardLayout/dashboardLayout";
import { ChevronRight } from "lucide-react";

const paymentOptions = [
  {
    title: "To HekoPay Account",
    description: "Send money directly to HekoPay account using a merchant ID",
    link: "/payments/hekopay",
  },
  {
    title: "To M-Pesa Till",
    description: "Pay for goods through M-Pesa paybill account",
    link: "/payments/mpesa-till",
  },
  {
    title: "To M-Pesa Paybill",
    description: "Send money to an M-Pesa paybill account",
    link: "/payments/mpesa-paybill",
  },
  {
    title: "To Bank Account",
    description: "Send money directly to a card or bank account",
    link: "/payments/bank-account", // fixed typo
  },
];

const Payments = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <h2 className="text-xl font-bold text-purple-800">Make a Payment</h2>

        <div className="grid gap-4 grid-cols-1">
          {paymentOptions.map((option, index) => (
            <Link
              to={option.link}
              key={index}
              className="bg-white shadow-custom-least rounded-lg p-5 flex items-center justify-between hover:shadow-lg transition border border-gray-100 hover:bg-gray-50"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-purple-700" />
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Payments;

import React from "react";
import { ArrowUpCircle, ArrowDownCircle, DownloadIcon } from "lucide-react";

const RecentTransactions = () => {
  const transactions = [
    {
      description: "Jumbo Jet",
      transactionId: "TXN123456",
      type: "Credit",
      date: "2025-07-01",
      amount: 5000,
    },
    {
      description: "Wilson",
      transactionId: "TXN654321",
      type: "Debit",
      date: "2025-06-25",
      amount: -2000,
    },
    {
      description: "KPLC",
      transactionId: "TXN987654",
      type: "Credit",
      date: "2025-06-20",
      amount: 1500,
    },
    {
      description: "Jumbo Jet",
      transactionId: "TXN123456",
      type: "Credit",
      date: "2025-07-01",
      amount: 5000,
    },
    {
      description: "Wilson",
      transactionId: "TXN654321",
      type: "Debit",
      date: "2025-06-25",
      amount: -2000,
    },
    {
      description: "KPLC",
      transactionId: "TXN987654",
      type: "Credit",
      date: "2025-06-20",
      amount: 1500,
    },
    {
      description: "Jumbo Jet",
      transactionId: "TXN123456",
      type: "Credit",
      date: "2025-07-01",
      amount: 5000,
    },
    {
      description: "Wilson",
      transactionId: "TXN654321",
      type: "Debit",
      date: "2025-06-25",
      amount: -2000,
    },
    {
      description: "KPLC",
      transactionId: "TXN987654",
      type: "Credit",
      date: "2025-06-20",
      amount: 1500,
    },
    {
      description: "Jumbo Jet",
      transactionId: "TXN123456",
      type: "Credit",
      date: "2025-07-01",
      amount: 5000,
    },
    {
      description: "Wilson",
      transactionId: "TXN654321",
      type: "Debit",
      date: "2025-06-25",
      amount: -2000,
    },
    {
      description: "KPLC",
      transactionId: "TXN987654",
      type: "Credit",
      date: "2025-06-20",
      amount: 1500,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border border-neutral-300">Description</th>
            <th className="px-4 py-2 border border-neutral-300">
              Transaction ID
            </th>
            <th className="px-4 py-2 border border-neutral-300">Type</th>
            <th className="px-4 py-2 border border-neutral-300">Date</th>
            <th className="px-4 py-2 border border-neutral-300">Amount</th>
            <th className="px-4 py-2 border border-neutral-300">Receipt</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.transactionId}>
              <td className="px-4 py-2 border-b border-neutral-300">
                <div className="flex items-center gap-2">
                  {txn.amount >= 0 ? (
                    <ArrowUpCircle className="text-green-600 w-4 h-4" />
                  ) : (
                    <ArrowDownCircle className="text-orange-500 w-4 h-4" />
                  )}
                  {txn.description}
                </div>
              </td>

              <td className="px-4 py-2 border-b border-neutral-300">
                {txn.transactionId}
              </td>
              <td className="px-4 py-2  border-b border-neutral-300">
                {txn.type}
              </td>
              <td className="px-4 py-2 border-b border-neutral-300">
                {txn.date}
              </td>
              <td className="px-4 py-2 border-b border-neutral-300">
                {txn.amount >= 0
                  ? `KES ${txn.amount.toLocaleString()}`
                  : `KES -${Math.abs(txn.amount).toLocaleString()}`}
              </td>
              <td className="px-4 py-2 border-b text-purple-600 cursor-pointer border-neutral-300">
                <DownloadIcon color="green" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;

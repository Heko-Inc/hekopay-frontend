import React, { useState } from "react";

import { Send, Link2, Repeat } from "lucide-react";

import { useNavigate } from "react-router-dom";

import CreateOneTimeLink from "../CreateOneTimeLink/CreateOneTimeLink";
import CreateFrequentLink from "../CreateAfrequentLink/FrequentLink";

const methods = [
  {
    id: 1,
    icon: <Send className="text-green-600 w-8 h-8" />,
    title: "Send a Push Notification",
    description:
      "Enter a customer's phone number and amount. They'll receive an M-PESA STK push to complete the payment by entering their PIN.",
    link: "/marketplace/send-stk-push",
  },
  {
    id: 2,
    icon: <Link2 className="text-blue-600 w-8 h-8" />,
    title: "Create One-Time Link",
    description:
      "Generate a unique payment link and share it via SMS, WhatsApp, or Email. Customers can pay via M-PESA, Visa, or Mastercard.",
    // link: "/marketplace/one-time-link",
    link: "#",
  },
  {
    id: 3,
    icon: <Repeat className="text-purple-600 w-8 h-8" />,
    title: "Frequent Payment Link",
    description:
      "Set up a recurring payment link for regular customers. They can easily pay through M-PESA, Visa, or Mastercard without needing a new link each time.",
    link: "#",
  },
];

const PaymentMethods = () => {
  const navigate = useNavigate();

  const [showCreateOneTimeLink, setShowCreateOneTimeLink] = useState(false);

  const [showCreateFrequentLink, setShowCreateFrequentLink] = useState(false);

  return (
    <div className="p-6 h-[80vh] flex justify-items-center items-center w-full max-w-[1100px] mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Choose payment method
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-custom-least p-6 flex flex-col gap-4  transition-all duration-300"
              onClick={() => {
                if (method.id === 2) {
                  setShowCreateOneTimeLink(true);
                }
                if (method.id === 3) setShowCreateFrequentLink(true);

                if (method.id === 1) {
                  navigate(method.link);
                }
              }}
            >
              <div className="flex items-center justify-center">
                {method.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                {method.title}
              </h2>
              <p className="text-gray-600 text-sm text-center">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {showCreateOneTimeLink && (
        <CreateOneTimeLink
          setShowCreateOneTimeLink={setShowCreateOneTimeLink}
        />
      )}
      {showCreateFrequentLink && (
        <CreateFrequentLink
          setShowCreateFrequentLink={setShowCreateFrequentLink}
        />
      )}
    </div>
  );
};

export default PaymentMethods;

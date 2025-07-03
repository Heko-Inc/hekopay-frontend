import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

import Policy from "../../components/PrivacyPolicy/Plolicy";

const PolicyDoc = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 py-6 pt-2 md:px-16 bg-white">
      <div className="w-full max-w-5xl flex justify-between items-center mb-2">
        <Logo />
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-[3px]"
        >
          Back
        </button>
      </div>

      <h2 className="text-3xl font-bold mb-2 text-center">Privacy Policy</h2>
      <Policy />
    </div>
  );
};

export default PolicyDoc;

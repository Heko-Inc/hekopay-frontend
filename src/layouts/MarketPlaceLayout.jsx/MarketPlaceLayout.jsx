import React from "react";

import Navbar from "../../components/RegistrationComponents/Navbar/Navbar";

import { useNavigate } from "react-router-dom";

const MarketPlaceLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <Navbar />
      <button
        className="absolute btn-primary left-[4rem] top-[80px]"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      {children}
    </div>
  );
};

export default MarketPlaceLayout;

import React from 'react';
import LogoIcon from "../../assets/icons/logo.svg";

const Logo = () => {
  return (
    <div className="inline-flex items-center space-x-2">
      <img src={LogoIcon} alt="HekoPay Logo" className="h-8 md:h-10 w-auto" />
      <h4 className="text-xl font-semibold text-black">Heko<span className="text-[#F28410]">Pay</span></h4>
    </div>
  );
};

export default Logo;

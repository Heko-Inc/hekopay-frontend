import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Logo/Logo";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full  flex justify-between items-center mb-2  px-[4rem] py-2 mx-auto shadow-sm">
        <Logo />
        {/* <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-[2]"
        >
          Back
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;

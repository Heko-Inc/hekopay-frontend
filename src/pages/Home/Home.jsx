import React from "react";
import Login1 from "../../assets/images/login1.png";
import Login2 from "../../assets/images/login2.png";
import Logo from "../../components/Logo/Logo";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col relative overflow-hidden">
      <div className="absolute z-50 m-[3rem]">
        <Logo />
      </div>
      <div className="flex flex-col md:flex-row flex-1 h-full w-full">
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src={Login1}
            alt="Business Possibilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15 bg-opacity-40 flex items-center justify-center px-4">
            <h2 className="text-white text-xl md:text-2xl font-bold text-center">
              Infinite Possibilities for Your Business
            </h2>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src={Login2}
            alt="Empowering Business"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15 bg-opacity-40 flex items-center justify-center px-4">
            <h2 className="text-white text-xl md:text-2xl font-bold text-center">
              Empowering Your Business with Every Transaction
            </h2>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/30 bg-opacity-50 text-white text-center p-8 z-10">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mt-[16rem]">
          Change the Way You Transact
        </h3>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-xs md:max-w-none justify-center">
          <button
            className="btn-orange"
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Sign In
          </button>
          <button
            className="btn-orange"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

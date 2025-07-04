import React from "react";
import Login1 from "../../../assets/images/login2.png";
import Logo from "../../../components/Logo/Logo";
import { useNavigate, Link } from "react-router-dom";
import Terms from "../../../components/Terms/Terms";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen  w-screen flex flex-col md:flex-row relative overflow-hidden">
      <div className="hidden md:block relative w-1/2 h-full">
        <img
          src={Login1}
          alt="Business Possibilities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/15 flex items-center justify-center px-4">
          <h2 className="text-white text-2xl font-bold text-center">
            Infinite Possibilities for Your Business
          </h2>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="relative w-full md:w-1/2 h-full bg-white flex items-center justify-center overflow-y-scroll overflow-x-hidden">
        <div className="w-full max-w-[600px]  p-8 space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="mt-[9rem]">
              <Logo />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center">Create Account</h3>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium"
              >
                First name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium"
              >
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create your password(min 8 chars)"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <p className="text-xs text-gray-500 text-center">
            By creating an account you agree to our{" "}
            <Link to="/terms" className="text-purple-600 hover:underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy-policy"
              className="text-purple-600 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <button className="w-full px-6 py-2 bg-purple-600 hover:bg-purple-800 text-white rounded font-medium">
            Create an account
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <button className="w-full px-6 py-2 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
            <span className="ml-2">Signup with Google</span>
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-purple-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    <Terms/>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import Login1 from "../../../assets/images/login1.png";
import Logo from "../../../components/Logo/Logo";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const validEmail = "admin@example.com";
    const validPassword = "secure123";

    if (email === validEmail && password === validPassword) {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row relative overflow-hidden">
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

      <div className="relative w-full md:w-1/2 h-full bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6">
          <div className="flex justify-center">
            <Logo />
          </div>

          <h3 className="text-2xl font-bold text-center">Welcome back!</h3>
          <p className="text-center text-gray-600">
            Login to access all your data
          </p>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 font-medium -mt-2">{error}</p>
          )}

          <div className="flex justify-end text-sm">
            <Link
              to="/forgot-password"
              className="text-purple-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            className="w-full px-6 py-2 bg-purple-600 hover:bg-purple-800 text-white rounded font-medium"
            onClick={handleLogin}
          >
            Login
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">or continue with</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <button className="w-full px-6 py-2 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
            <span className="ml-2">Login with Google</span>
          </button>

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-purple-600 hover:underline">
              Register
            </Link>
          </p>
        </div>

        <Link
          to="/privacy-policy"
          className="absolute bottom-4 right-6 text-sm text-gray-500 hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Login;

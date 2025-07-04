import React, { useState } from "react";
import Logo from "../../../components/Logo/Logo";
import { useNavigate, Link } from "react-router-dom";
import ForgotPasswordBanner from "../../../assets/images/image2.jpeg";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    // Simulate sending reset link
    setError("");
    setSubmitted(true);

    setTimeout(() => {
      navigate("/login");
    }, 2500);
  };

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row relative overflow-hidden">
      {/* Left Banner */}
      <div className="hidden md:block relative w-1/2 h-full">
        <img
          src={ForgotPasswordBanner}
          alt="Forgot Password Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4">
          <h2 className="text-white text-3xl font-bold text-center leading-relaxed">
            Forgot your password?
            <br />
            Reset it in seconds.
          </h2>
        </div>
      </div>

      {/* Right Form */}
      <div className="relative w-full md:w-1/2 h-full bg-white flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 space-y-6">
          <div className="flex justify-center">
            <Logo />
          </div>

          <h3 className="text-2xl font-bold text-center">Password Recovery</h3>
          <p className="text-center text-gray-600">
            Enter the email linked to your account and we'll send you a password
            reset link.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded text-center">
              Reset link sent to <strong>{email}</strong>. Check your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition"
              >
                Send Reset Link
              </button>
            </form>
          )}

          <p className="text-center text-sm mt-6">
            Remember your password?{" "}
            <Link to="/sign-in" className="text-purple-600 hover:underline">
              Back to Login
            </Link>
          </p>

          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <Link to="/sign-up" className="text-purple-600 hover:underline">
              Register
            </Link>
          </p>
        </div>

        <ForgotPassword />
      </div>
    </div>
  );
};

export default ForgotPassword;

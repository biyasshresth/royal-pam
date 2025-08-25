import React from "react";
import { FaGoogle, FaFacebookF, FaApple, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; // <-- Import Link here
import logo from "../assets/logo.svg";
import { FaArrowLeft } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className=" top-4   ">
        {/* Back Button - OUTSIDE Form Box */}
        <Link
          to="/"
          className="absolute top-20 left-3 p-2 rounded-full bg-orange-500 border border-orange-500 hover:scale-110 transition"
          aria-label="Go back home"
        >
          <FaArrowLeft className="text-white" />
        </Link>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-14 h-w-14 object-contain" />
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-semibold mb-2">Sign in</h2>
        <p className="text-center text-sm text-gray-700 mb-6">
          You can use this account across these sites:
          <br />
          <span className="text-xs text-gray-700">
            realcommercial.com.au & property.com.au
          </span>
        </p>

        {/* Email input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email address
          </label>
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Continue button */}
        <button className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 mb-4">
          Continue
        </button>

        {/* Create account */}
        <p className="text-center text-sm mb-4">
          Don't have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 cursor-pointer font-medium"
          >
            Create account
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center mb-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 hover:bg-gray-50">
            <FaGoogle className="mr-3 text-lg" />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 hover:bg-gray-50">
            <FaFacebookF className="mr-3 text-lg text-blue-600" />
            Continue with Facebook
          </button>

          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 hover:bg-gray-50">
            <FaApple className="mr-3 text-lg" />
            Continue with Apple
          </button>
        </div>

        {/* Terms */}
        <p className="text-center text-xs text-gray-400">
          By continuing, you agree to the{" "}
          <span className="text-blue-600 cursor-pointer">Terms of Use</span>.
          <br />
          Read our{" "}
          <span className="text-blue-600 cursor-pointer">
            Personal Information Collection Statement
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default SignIn;

import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Forgot Password</h2>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded-lg"
        />
        <button className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition">
          Reset Password
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Remember your password?{" "}
        <Link to="/auth/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;

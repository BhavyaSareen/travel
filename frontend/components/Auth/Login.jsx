import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg"
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </form>
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <Link to="/auth/forgot-password" className="hover:underline">
          Forgot Password?
        </Link>
        <Link to="/auth/signup" className="hover:underline">
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Login;

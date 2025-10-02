import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded-lg"
        />
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
        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;

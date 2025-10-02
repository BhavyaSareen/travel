import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 bg-blue-600 items-center justify-center">
        <img
          src="https://source.unsplash.com/600x800/?travel,nature"
          alt="Auth"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Outlet */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

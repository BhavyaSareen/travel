import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">MyLogo</Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/tours" className="hover:text-blue-600">
              Tour Packages
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/auth/login"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Icon (can add dropdown later) */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

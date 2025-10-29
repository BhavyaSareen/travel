import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white mt-5">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center flex-grow px-8 mt-20">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Explore the World with Ease 🌏
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Plan your perfect getaway — discover destinations, book trips, and
            manage your travel all in one place.
          </p>
          <Link to="/auth/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          > Get Started
          </Link>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Travel"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-blue-50">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose TravelEase?
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">
              🌴 Explore Destinations
            </h4>
            <p className="text-gray-600">
              Discover hidden gems and popular spots with curated travel guides.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">
              ✈️ Easy Bookings
            </h4>
            <p className="text-gray-600">
              Book your trips, stays, and activities in just a few clicks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">
              🧭 Smart Planning
            </h4>
            <p className="text-gray-600">
              Get personalized recommendations and travel itineraries.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center border-t mt-auto">
        <p className="text-gray-600">
          © {new Date().getFullYear()} TravelEase. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;

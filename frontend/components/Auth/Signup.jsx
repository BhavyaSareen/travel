import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Signup failed");
      }

      alert("Signup successful! Please verify your email.");
      navigate("/auth/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg"
          onChange={handleChange} required
        />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg"
          onChange={handleChange} required
        />
        <input
          type="password" placeholder="Password" className="w-full p-3 border rounded-lg"
          onChange={handleChange} required
        />
        <button type="submit" disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
      {error && <p className="text-red-600 mt-2">{error}</p>}
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

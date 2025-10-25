import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../utils/auth"; // ✅ import token helper

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Example API call — replace with your real backend endpoint
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // ✅ Extract Supabase token
        const token = data.data.session.access_token;
        setToken(token);   // Save token to localStorage
        navigate("/dashboard");  // Redirect to dashboard
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center"> Login </h2>

      <form className="space-y-4" onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <button type="submit" disabled={loading}
          className={`w-full bg-blue-600 text-white py-3 rounded-lg transition hover:bg-blue-700 ${loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          {loading ? "Logging in..." : "Login"}
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

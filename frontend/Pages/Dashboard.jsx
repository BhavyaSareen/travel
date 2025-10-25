import React from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/auth";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/auth/login");
  };

  return (
    <div className="mt-16">
      <h1>Welcome to Dashboard!</h1>
      <button className={`bg-blue-600 text-white py-3 px-5 rounded-lg transition hover:bg-blue-700 `} onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;

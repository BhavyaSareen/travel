import React from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/auth";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <div className="mt-16">
      <h1>Welcome to Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;

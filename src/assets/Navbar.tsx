import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../assets/AuthContext";


const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  if (!user) return null;

  return (
    <nav>
      <span>Logged in as: {user.username} ({user.role})</span>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      {user.role === "Admin" && <Link to="/settings">Settings</Link>}
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
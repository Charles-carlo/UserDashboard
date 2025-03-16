import React from "react";
import { useAuth } from "../assets/AuthContext";

import { Role } from "../assets/AuthContext";


const Login: React.FC = () => {
  const { login } = useAuth();
  const handleLogin = (role: Role) => {
    const username = prompt("Enter your username:") || "Guest";
    login(username, role);
  };
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => handleLogin("Viewer")}>Login as Viewer</button>
      <button onClick={() => handleLogin("Editor")}>Login as Editor</button>
      <button onClick={() => handleLogin("Admin")}>Login as Admin</button>
    </div>
  );
};

export default Login;
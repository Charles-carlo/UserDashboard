import React from "react";
import { useAuth } from "../assets/AuthContext";


const Dashboard: React.FC = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Dashboard - Welcome {user?.username} ({user?.role})</h2>
      {user?.role === "Admin" && <div><h3>Admin Controls</h3><p>Manage users and settings</p></div>}
      {user?.role === "Editor" && <div><h3>Content Editor Panel</h3><p>Edit and publish content</p></div>}
      {user?.role === "Viewer" && <div><h3>Read-Only Reports</h3><p>View analytics and reports</p></div>}
    </div>
  );
};

export default Dashboard;

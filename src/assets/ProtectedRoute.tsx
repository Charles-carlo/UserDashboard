import React, { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../assets/AuthContext";


type Role = "Admin" | "Editor" | "Viewer" | null;

const ProtectedRoute: React.FC<{ element: JSX.Element; roles?: Role[] }> = ({ element, roles }) => {
  const { user } = useAuth();
  if (!user || (roles && !roles.includes(user.role))) return <Navigate to="/login" />;
  return element;
};

export default ProtectedRoute;
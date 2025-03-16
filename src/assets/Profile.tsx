import React from "react";
import { useAuth } from "../assets/AuthContext";

const Profile: React.FC = () => {
  const { user } = useAuth();
  return <h2>Profile Page - {user?.username}</h2>;
};

export default Profile;

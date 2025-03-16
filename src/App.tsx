import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./assets/Navbar";
import Login from "./assets/Login";
import Dashboard from "./assets/Dashboard";
import Profile from "./assets/Profile";
import Settings from "./assets/Settings";
import ProtectedRoute from "./assets/ProtectedRoute";
import './App.css'
import { AuthProvider } from "./assets/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/settings" element={<ProtectedRoute element={<Settings />} roles={["Admin"]} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}


export default App

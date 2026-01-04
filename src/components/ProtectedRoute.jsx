import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roleRequired }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // 🚫 User not authenticated
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 🚫 User authenticated but not authorized
  if (roleRequired && role !== roleRequired) {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ Access granted
  return children;
};

export default ProtectedRoute;

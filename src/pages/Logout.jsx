import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    // Clear authentication state
    logout();

    // Redirect after brief delay
    const timer = setTimeout(() => {
      navigate("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [logout, navigate]);

  return (
    <div className="logout-screen">
      <div className="logout-card">
        <h2>Signed Out Successfully</h2>
        <p>Your session has ended. You’ll be redirected shortly.</p>
        <span className="logout-hint">
          Thank you for using PayZen AI
        </span>
      </div>
    </div>
  );
};

export default Logout;

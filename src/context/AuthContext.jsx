import { createContext, useContext, useState } from "react";

/**
 * AuthContext
 * Centralized authentication state for the application
 */
const AuthContext = createContext();

/**
 * AuthProvider
 * Wraps the app and provides auth state & actions
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    role: localStorage.getItem("role"),
    token: localStorage.getItem("token"),
  });

  /**
   * Login handler
   * Stores authentication session
   * (Replace dummy token with backend JWT later)
   */
  const login = (role, token = "dummy-token") => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    setUser({ role, token });
  };

  /**
   * Logout handler
   * Clears session and resets auth state
   */
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * useAuth
 * Custom hook for consuming auth context
 */
export const useAuth = () => useContext(AuthContext);

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      localStorage.removeItem("token");
      localStorage.removeItem("role");

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      if (data.role === "Employee") {
        window.location.href = "/employee-dashboard";
      } else {
        window.location.href = "/hr-dashboard";
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* LEFT BRAND PANEL */}
        <div className="login-brand">
          <h1>PayZen AI</h1>
          <p>
            Smart payroll automation platform for HR teams and employees.
          </p>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="login-form">
          <h2>Welcome Back</h2>
          <p className="login-hint">Sign in to continue</p>

          <input
            className="login-input"
            type="email"
            placeholder="Work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" onClick={handleLogin}>
            Sign In
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;

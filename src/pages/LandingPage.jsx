import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const goToLogin = (role) => {
    localStorage.setItem("loginRole", role);
    navigate("/login");
  };

  return (
    <div className="landing-page">
      <div className="landing-wrapper">

        {/* LEFT CONTENT */}
        <div className="landing-content">
          <span className="landing-badge">Payroll Platform</span>

          <h1 className="landing-title">
            PayZen <span>AI</span>
          </h1>

          <p className="landing-subtitle">
            Smart payroll automation built for modern teams.
            Manage employees, attendance and salary payouts from one dashboard.
          </p>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="landing-actions">
          <div className="role-card hr" onClick={() => goToLogin("HR")}>
            <h3>HR Workspace</h3>
            <p>Manage payroll cycles, approvals and reports</p>
            <span>Continue as HR →</span>
          </div>

          <div
            className="role-card employee"
            onClick={() => goToLogin("Employee")}
          >
            <h3>Employee Workspace</h3>
            <p>View payslips, attendance and salary history</p>
            <span>Continue as Employee →</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Landing;

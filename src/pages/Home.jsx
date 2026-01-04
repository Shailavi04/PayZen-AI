import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = (role) => {
    localStorage.setItem("loginRole", role);
    navigate("/login");
  };

  return (
    <div className="home">
      <div className="hero">

        {/* LEFT SECTION */}
        <div className="hero-content">
          <span className="hero-badge">AI Powered Payroll</span>

          <h1 className="hero-title">
            PayZen <span>AI</span>
          </h1>

          <p className="hero-subtitle">
            Intelligent payroll automation for modern workplaces.
            Manage salaries, attendance, and compliance — all in one place.
          </p>

          <div className="hero-features">
            <div>✔ Secure multi-company support</div>
            <div>✔ Role-based dashboards</div>
            <div>✔ Automated payroll runs</div>
            <div>✔ Instant salary slips</div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="hero-actions">
          <div className="access-card hr" onClick={() => goToLogin("HR")}>
            <h3>HR Portal</h3>
            <p>Run payroll, manage teams, and track attendance</p>
            <span>Access as HR →</span>
          </div>

          <div
            className="access-card employee"
            onClick={() => goToLogin("Employee")}
          >
            <h3>Employee Portal</h3>
            <p>View payslips, salary history, and payroll status</p>
            <span>Access as Employee →</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;

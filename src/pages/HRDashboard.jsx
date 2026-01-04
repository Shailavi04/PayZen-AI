import { useEffect, useState } from "react";

const HRDashboard = () => {
  const [days, setDays] = useState("");
  const [payrolls, setPayrolls] = useState([]);

  const runPayroll = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/payroll/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          employee_id: 1,
          days_present: days,
          month: "January",
          year: 2026
        })
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message || "Error");

      alert("Payroll cycle completed successfully ✅");
      setDays("");
      fetchPayrolls();
    } catch {
      alert("Unable to process payroll");
    }
  };

  const fetchPayrolls = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/payroll/all", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });

      const data = await res.json();
      if (res.ok) setPayrolls(data);
    } catch {
      console.log("Error fetching payroll history");
    }
  };

  useEffect(() => {
    fetchPayrolls();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="page hr-dashboard">

        {/* HEADER */}
        <div className="dashboard-header">
          <h2>Payroll Control Center</h2>
          <p className="dashboard-subtitle">
            Run payroll cycles and review processed payouts
          </p>
        </div>

        {/* RUN PAYROLL */}
        <div className="dashboard-section">
          <h3>New Payroll Run</h3>
          <p className="section-hint">
            Enter attendance data to calculate employee salary
          </p>

          <div className="payroll-run-box">
            <input
              className="login-input"
              type="number"
              placeholder="Days worked (e.g. 22)"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />

            <button className="btn payroll-btn" onClick={runPayroll}>
              Process Payroll
            </button>
          </div>
        </div>

        {/* PAYROLL HISTORY */}
        <div className="dashboard-section">
          <h3>Payroll Activity Log</h3>

          {payrolls.length === 0 ? (
            <p className="empty-state">
              No payroll data available yet
            </p>
          ) : (
            <table className="payroll-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Year</th>
                  <th>Attendance</th>
                  <th>Net Pay</th>
                </tr>
              </thead>
              <tbody>
                {payrolls.map((p, index) => (
                  <tr key={index}>
                    <td>{p.month}</td>
                    <td>{p.year}</td>
                    <td>{p.days_present} days</td>
                    <td>₹ {p.net_salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
};

export default HRDashboard;

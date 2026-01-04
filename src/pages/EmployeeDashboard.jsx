import { useEffect, useState } from "react";

const EmployeeDashboard = () => {
  const [salarySlip, setSalarySlip] = useState(null);
  const [loading, setLoading] = useState(true);

  // FETCH LATEST PAYSLIP
  const fetchSalarySlip = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/employee/salary-slip",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      );

      const data = await res.json();
      if (res.ok) {
        setSalarySlip(data);
      }
    } catch {
      console.log("Unable to fetch payslip");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalarySlip();
  }, []);

  if (loading)
    return (
      <div className="page">
        <p className="loading-text">Loading payroll data...</p>
      </div>
    );

  return (
    <div className="dashboard-container">
      <div className="page employee-dashboard">

        {/* HEADER */}
        <div className="dashboard-header">
          <h2>My Payroll Overview</h2>
          <p className="dashboard-subtitle">
            Review your latest salary statement
          </p>
        </div>

        {/* PAYSLIP */}
        {!salarySlip ? (
          <p className="empty-state">
            No payroll records available yet
          </p>
        ) : (
          <div className="salary-card">

            <div className="salary-card-header">
              <h3>Latest Payslip</h3>
              <span>
                {salarySlip.month} {salarySlip.year}
              </span>
            </div>

            <div className="salary-details">
              <div className="salary-row">
                <span>Attendance</span>
                <span>{salarySlip.days_present} days</span>
              </div>

              <div className="salary-row">
                <span>Base Salary</span>
                <span>₹ {salarySlip.basic_salary}</span>
              </div>
            </div>

            <div className="salary-net">
              <span>Net Pay Received</span>
              <h3>₹ {salarySlip.net_salary}</h3>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default EmployeeDashboard;

const SalarySlip = () => {
  return (
    <div className="page salary-page">

      <div className="salary-header">
        <h2>Payslip Summary</h2>
        <p className="salary-period">
          Salary Statement for April 2026
        </p>
      </div>

      <div className="salary-card">

        <div className="salary-section">
          <h4>Earnings</h4>

          <div className="salary-row">
            <span>Basic Pay</span>
            <span>₹40,000</span>
          </div>

          <div className="salary-row">
            <span>House Rent Allowance</span>
            <span>₹8,000</span>
          </div>
        </div>

        <div className="salary-section">
          <h4>Deductions</h4>

          <div className="salary-row">
            <span>Statutory Deductions</span>
            <span>₹3,000</span>
          </div>
        </div>

        <div className="salary-net">
          <span>Total Payable Amount</span>
          <h3>₹45,000</h3>
        </div>

      </div>

    </div>
  );
};

export default SalarySlip;

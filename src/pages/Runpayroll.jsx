const RunPayroll = () => {
  return (
    <div className="page run-payroll">

      <div className="payroll-header">
        <h2>Generate Monthly Payroll</h2>
        <p className="payroll-subtitle">
          Review salary components and finalize payouts for this cycle
        </p>
      </div>

      <div className="payroll-summary">

        <div className="summary-card">
          <span className="summary-label">Base Pay</span>
          <span className="summary-value">₹40,000</span>
        </div>

        <div className="summary-card">
          <span className="summary-label">Allowances</span>
          <span className="summary-value positive">+ ₹8,000</span>
        </div>

        <div className="summary-card">
          <span className="summary-label">Deductions</span>
          <span className="summary-value negative">- ₹3,000</span>
        </div>

      </div>

      <div className="payroll-card">

        <div className="net-salary">
          <span>Net Payable Amount</span>
          <h3>₹45,000</h3>
        </div>

        <button className="btn payroll-btn">
          Process Payroll
        </button>

      </div>

    </div>
  );
};

export default RunPayroll;

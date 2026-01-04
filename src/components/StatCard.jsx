const StatCard = ({ title, value }) => {
  return (
    <div className="stat-tile">
      <div className="stat-info">
        <span className="stat-label">{title}</span>
        <span className="stat-number">{value}</span>
      </div>

      <div className="stat-indicator" />
    </div>
  );
};

export default StatCard;

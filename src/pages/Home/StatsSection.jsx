import React from "react";
import '../Home/StyleSheet/StatsSection.css';

const StatsSection = () => {
  const stats = [
    { value: "789,900+", label: "Orders Delivered" },
    { value: "690+", label: "Customers" },
    { value: "100+", label: "Food Items" },
  ];

  return (
    <div className="setSpace">
    <div className="stats-section">
      <div className="row">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`col-12 col-md-4   stat-card ${
              index !== stats.length - 1 ? "border-end" : ""
            }`}
          >
            <h2 className="stat-value">{stat.value}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default StatsSection;


import React, { useEffect, useState } from "react";

const categoryColors = {
  Grocery: "#3b82f6",
  Clothes: "#10b981",
  Entertainment: "#f59e0b",
  Food: "#ef4444",
  Transport: "#8b5cf6",
  Other: "#6b7280",
};

export default function ExpenseBarChart({ expenses }) {
  const [animatedTotals, setAnimatedTotals] = useState({});

  // Aggregate totals by category
  const totals = {};
  expenses.forEach((e) => {
    const category = e.category.trim();
    const amount = Number(e.amount);
    totals[category] = (totals[category] || 0) + amount;
  });

  const maxAmount = Math.max(...Object.values(totals));

  // Animate bars on mount / update
  useEffect(() => {
    // Start from 0
    setAnimatedTotals(
      Object.fromEntries(Object.keys(totals).map((cat) => [cat, 0]))
    );

    // Animate to actual value
    const timeout = setTimeout(() => {
      setAnimatedTotals(totals);
    }, 50); // slight delay for effect

    return () => clearTimeout(timeout);
  }, [expenses]);

  if (!expenses || expenses.length === 0) {
    return (
      <div className="chart-container">
        <p>No expenses yet.</p>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <h3>Expenses by Category</h3>
      <div className="bars">
        {Object.entries(totals).map(([category, amount]) => {
          const widthPercent = (animatedTotals[category] || 0) / maxAmount * 100;
          const color = categoryColors[category] || "#3b82f6";

          return (
            <div key={category} className="bar-row">
              <span className="bar-label">{category}</span>
              <div className="bar-bg">
                <div
                  className="bar-fill"
                  style={{
                    width: `${widthPercent}%`,
                    backgroundColor: color,
                    transition: "width 1s ease-in-out",
                  }}
                ></div>
              </div>
              <span className="bar-amount">${amount.toFixed(2)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}


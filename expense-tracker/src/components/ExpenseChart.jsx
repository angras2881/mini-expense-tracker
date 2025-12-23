import { useEffect, useState } from "react";

export default function ExpenseChart({ expenses }) {
  const [totals, setTotals] = useState({});

  useEffect(() => {
    const summary = {};

    expenses.forEach((expense) => {
      const category = expense.category;
      const amount = Number(expense.amount);

      summary[category] = (summary[category] || 0) + amount;
    });

    setTotals(summary);
  }, [expenses]);

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded shadow">
      <h3 className="text-lg font-bold mb-2">Expenses by Category</h3>

      {Object.keys(totals).length === 0 ? (
        <p>No expense data available.</p>
      ) : (
       
    
     <ul className="expense-list">
  {Object.entries(totals).map(([category, amount]) => (
    <li className="expense-item" key={category}>
      <span className="category">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </span>
      <span className="amount">${amount.toFixed(2)}</span>
    </li>
  ))}
</ul>


      )}
    </div>
  );
}



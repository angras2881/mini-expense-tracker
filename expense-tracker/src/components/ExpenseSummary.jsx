import React from "react";

export default function ExpenseSummary({ expenses, deleteExpense }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="mt-6">
      {/* Summary Header */}
      <h3 className="text-xl font-bold mb-2">Summary</h3>
      <p className="mb-4">Total Expenses: ${total.toFixed(2)}</p>

      {/* Expense List */}
      <div className="bg-white rounded shadow divide-y">
        {expenses.length === 0 && (
          <p className="p-4 text-gray-500">No expenses added yet.</p>
        )}

        {expenses.map((e) => (
          <div
            key={e.id}
            className="flex justify-between items-center p-3"
          >
            {/* Expense Info */}
            <div>
              <p className="font-semibold">{e.desc}</p>
              <p className="text-sm text-gray-500">
                {e.category} • {e.date}
              </p>
            </div>

            {/* Amount & Delete */}
            <div className="flex items-center gap-4">
              <span className="font-bold">${e.amount.toFixed(2)}</span>
              <button
                onClick={() => deleteExpense(e.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




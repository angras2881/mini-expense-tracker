import ExpenseBarChart from "./ExpenseBarChart";

export default function ExpenseSummary({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="mt-4 p-4 bg-gray-100 rounded shadow">
        <h3 className="text-xl font-bold mb-2">Summary</h3>
        <p>Add some expenses to get insights!</p>
      </div>
    );
  }

  // Calculate total and highest expense category locally
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const highest = expenses.reduce(
    (max, e) => (e.amount > max.amount ? e : max),
    expenses[0]
  );

  const aiInsights = `Total spent: $${total.toFixed(2)}. Highest expense: ${highest.category} ($${highest.amount.toFixed(2)}).`;

  return (
    <div className="mt-4">
      <div className="p-4 bg-gray-100 rounded shadow">
        <h3 className="text-xl font-bold mb-2">Summary</h3>
        <div className="mt-2 p-2 bg-white rounded shadow">
          <h4 className="font-bold">Insights:</h4>
          <p>{aiInsights}</p>
        </div>
      </div>
      <ExpenseBarChart expenses={expenses} />
    </div>
  );
}



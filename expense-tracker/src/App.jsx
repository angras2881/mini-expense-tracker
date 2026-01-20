import { useState, useEffect } from "react"; // Added useEffect
import ExpenseForm from "./components/ExpenseForm";
import ExpenseSummary from "./components/ExpenseSummary";
import Footer from "./components/Footer"; // Don't forget to import your Footer!

function App() {
  // 1. Initialize state by checking Local Storage first
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("my_expenses");
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Save to Local Storage every time 'expenses' changes
  useEffect(() => {
    localStorage.setItem("my_expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between items-center p-6">
      {/* Main Container */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
          My Expense Tracker
        </h1>

        {/* Expense Form */}
        <ExpenseForm addExpense={addExpense} />

        {/* Expense Summary */}
        <ExpenseSummary expenses={expenses} deleteExpense={deleteExpense} />

      </div>

      {/* 3. Added Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;



 
 import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseBarChart from "./components/ExpenseBarChart"; // 1. Import the chart
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("my_expenses");
    return saved ? JSON.parse(saved) : [];
  });

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Hero /> 

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 mt-[-40px] z-10 mb-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
          My Expense Tracker
        </h1>

        <ExpenseForm addExpense={addExpense} />
        
        {/* 2. Place the Chart here (usually above or below the summary) */}
        <div className="my-8">
           <h2 className="text-xl font-bold mb-4 text-gray-800">Expenses by Category</h2>
           <ExpenseBarChart expenses={expenses} />
        </div>

        <ExpenseSummary expenses={expenses} deleteExpense={deleteExpense} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
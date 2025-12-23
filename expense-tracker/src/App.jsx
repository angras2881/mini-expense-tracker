

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import Footer from "./components/Footer";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  }

  return (
    <>
      <Navbar />
      <Hero />
      <section id="tracker">
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} />
      </section>
      <ExpenseSummary expenses={expenses} />
      <Footer />
    </>
  )
}

export default App;

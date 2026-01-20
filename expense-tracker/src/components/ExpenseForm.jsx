
import { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Grocery");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount <= 0) {
      alert("Amount must be a positive number");
      return;
    }

    addExpense({
      desc,
      amount: parseFloat(amount),
      category,
      date,
    });

    setDesc("");
    setAmount("");
    setCategory("Grocery");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded shadow flex flex-wrap gap-2 items-center"
    >
      {/* Description */}
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="border p-2 rounded flex-1 min-w-[150px]"
        required
      />

      {/* Amount */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min="0.01"
        step="0.01"
        className="border p-2 rounded w-[120px] appearance-none"
        required
      />

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded w-[150px]"
      >
        <option>Grocery</option>
        <option>Entertainment</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>

      {/* Date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded w-[150px]"
      />

      {/* Button */}
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}

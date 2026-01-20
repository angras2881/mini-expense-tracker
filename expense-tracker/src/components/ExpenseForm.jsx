import { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(""); // Set to empty string for placeholder

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !category) return; // Basic validation

    addExpense({
      description,
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleDateString(),
    });

    // Clear inputs after adding
    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mb-8 items-end justify-center">
      {/* Description Input */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-600">Description</label>
        <input
          type="text"
          placeholder="e.g. Coffee"
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      {/* Amount Input */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-600">Amount</label>
        <input
          type="number"
          placeholder="0.00"
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      {/* Category Dropdown */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-600">Category</label>
        <select
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>Select Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
        </select>
      </div>

      {/* Add Button */}
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-md"
      >
        Add
      </button>
    </form>
  );
};

export default ExpenseForm;
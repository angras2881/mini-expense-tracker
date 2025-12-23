
import { useState, useEffect } from "react";
import axios from "axios";

export default function ExpenseForm({ addExpense }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [suggestedCategory, setSuggestedCategory] = useState("");

  const categories = ["Grocery", "Clothes", "Entertainment", "Food", "Transport", "Other"];

  useEffect(() => {
    if (desc.length > 2) {
      axios
        .post("/api/categorize", { text: desc })
        .then((res) => setSuggestedCategory(res.data.category))
        .catch(() => setSuggestedCategory(""));
    } else {
      setSuggestedCategory("");
    }
  }, [desc]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCategory = category || suggestedCategory || "Other";

    addExpense({
      desc,
      amount: parseFloat(amount),
      category: finalCategory,
    });

    setDesc("");
    setAmount("");
    setCategory("");
    setSuggestedCategory("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded shadow flex flex-row flex-wrap gap-2 items-end"
    >
      {/* Description */}
      <div className="flex-1 min-w-[150px]">
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>

      {/* Amount */}
      <div className="w-[100px] flex-shrink-0">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded w-full"
          required
          style={{ MozAppearance: "textfield" }} // remove spinner Firefox
        />
      </div>

      {/* Category */}
      <div className="w-[150px] flex-shrink-0">
        <select
          value={category || suggestedCategory || ""}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="" disabled>
            {suggestedCategory ? `Suggested: ${suggestedCategory}` : "Select Category"}
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex-shrink-0">
        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}


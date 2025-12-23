const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// AI-like category suggestion
app.post("/api/categorize", (req, res) => {
  const text = req.body.text.toLowerCase();
  let category = "Other";
  if (text.includes("food") || text.includes("coffee") || text.includes("restaurant")) category = "Food";
  else if (text.includes("bus") || text.includes("train") || text.includes("uber")) category = "Travel";
  else if (text.includes("rent") || text.includes("electric") || text.includes("bill")) category = "Bills";
  res.json({ category });
});

// AI-like insights
app.post("/api/insights", (req, res) => {
  const expenses = req.body.expenses;
  let total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const categoryMap = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});
  res.json({
    text: `Total spent: $${total.toFixed(2)}. Spending by category: ${JSON.stringify(categoryMap)}.`,
  });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));

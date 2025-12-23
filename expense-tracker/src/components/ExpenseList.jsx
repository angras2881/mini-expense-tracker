function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      {expenses.length === 0 && <p>No expenses added yet.</p>}
      {expenses.map((exp, index) => (
        <div className="expense-card" key={index}>
          <h3>{exp.title}</h3>
          <p>Amount: ${exp.amount.toFixed(2)}</p>
          <p>Category: {exp.category}</p>
        </div>
      ))}
    </div>
  )
}

export default ExpenseList;

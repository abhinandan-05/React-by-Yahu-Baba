import { useState, useEffect } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, SetTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return alert("please fill all fields!");

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };

    onAddExpense()
  };
  return (
    <div>
      <form class="expense-form" onSubmit={handleSubmit}>
        <input
          placeholder="Expense Title"
          type="text"
          value={title}
          onChange={(e) => SetTitle(e.target.value)}
        />
        <input
          placeholder="Amount ₹"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;

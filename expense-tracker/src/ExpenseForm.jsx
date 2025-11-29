import { useState, useEffect, useRef } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, SetTitle] = useState("");
  const [amount, setAmount] = useState("");
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return alert("please fill all fields!");

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };

    onAddExpense(newExpense);
    SetTitle("");
    setAmount("");
    titleRef.current.focus();
  };
  return (
    <div>
      <form className="expense-form" onSubmit={handleSubmit}>
        <input
          placeholder="Expense Title"
          type="text"
          value={title}
          onChange={(e) => SetTitle(e.target.value)}
          ref={titleRef}
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

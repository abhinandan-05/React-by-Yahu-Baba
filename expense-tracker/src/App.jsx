import { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expenses) => {
    setExpense((prev) => [...prev, expenses]);
  };

  const deleteExpense = (id) => {};

  return (
    <div class="app-container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <h3 class="total">Total Expense: ₹750.00</h3>
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;

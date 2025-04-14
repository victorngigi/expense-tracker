import { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [expense, setExpense] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      expense,
      description,
      amount: parseFloat(amount),
      category,
      date 
    };
    addExpense(newExpense);
    setExpense("");
    setDescription("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Enter expense details</h2>
        <input type="text"
        placeholder="Expense"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        required
        />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
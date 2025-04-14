import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, {useState} from "react";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseForm from "./components/ExpenseForm";
import SearchBar from "./components/SearchBar"

function App() {
  const [expenses, setExpenses] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(SearchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(SearchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={SearchTerm} setSearchTerm={setSearchTerm} />
      <div className="main-content">
        <div className="form-section">
          
        </div>
        <div className="teble-section">

        </div>
      </div>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable expenses={filteredExpenses} deleteExpense={deleteExpense} />
    </div>
  )
}

export default App

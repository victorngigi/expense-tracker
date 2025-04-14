import React, { useState, useMemo } from 'react';

function ExpenseTable({ expenses, deleteExpense }) {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedExpenses = useMemo(() => {
    let sortableExpenses = [...expenses];
    if (sortConfig !== null) {
      sortableExpenses.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortConfig.direction === 'ascending'
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableExpenses;
  }, [expenses, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Expense</th>
          <th style={{ cursor: 'pointer' }} onClick={() => requestSort('description')}>
            Description
          </th>
          <th>Amount</th>
          <th style={{ cursor: 'pointer' }} onClick={() => requestSort('category')}>
            Category
          </th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {sortedExpenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.expense}</td>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>{expense.date}</td>
            <td>
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;

import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredInput, setEnteredInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    //  proper approach when new state is depended on the previous state
    setEnteredInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredInput.title,
      amount: enteredInput.amount,
      date: new Date(enteredInput.date),
    };
    onSaveExpenseData(expenseData);
    setEnteredInput({ title: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            value={enteredInput.title}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            value={enteredInput.amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            value={enteredInput.date}
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            step="0.01"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

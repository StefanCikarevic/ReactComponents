import React, { useState } from "react";
import "../NewExpense/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitleInput] = useState("");
  const [enteredAmount, setAmountInput] = useState("");
  const [enteredDate, setDataInput] = useState("");

  const titleChangeHendler = (event) => {
    setTitleInput(event.target.value);
  };

  const amountChangeHendler = (event) => {
    setAmountInput(event.target.value);
  };

  const dateChangeHendler = (event) => {
    setDataInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      enteredDate: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setTitleInput("");
    setAmountInput("");
    setDataInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHendler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHendler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2021-12-31"
            value={enteredDate}
            onChange={dateChangeHendler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

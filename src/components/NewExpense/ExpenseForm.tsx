import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event: any) => {
    setAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (event: any) => {
    setDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  const submitChangeHandler = (event: any) => {
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: amount,
        date: new Date(date),
    };

    console.log(expenseData);
    setEnteredTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitChangeHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-07-05"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

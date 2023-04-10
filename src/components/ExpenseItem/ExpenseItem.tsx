import { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItemComponent(props: any) {
  // passed data as prop from parent component (mock data)
//   const month = props.date.toLocaleString("en-US", { month: "long" });
//   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
//   const year = props.date.getFullYear();
  //   const expenseDate = new Date(2023, 4, 7);
  //   const expenseTitle = 'Car Insurance';
  //   const expenseAmount = 294.67;
  const [title, setTitle] = useState(props.title);

  const updateTitle=()=>{
    setTitle('Updated!');
  }

  // divide the component into two as date can be maintained by passing props
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={updateTitle}>Update</button>
      </div>
    </div>
  );
}

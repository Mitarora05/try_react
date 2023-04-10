import { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItemComponent(props: any) {
  const [title, setTitle] = useState(props.title);

  // const updateTitle=()=>{
  //   setTitle('Updated!');
  // }

  // divide the component into two as date can be maintained by passing props
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={updateTitle}>Update</button> */}
      </div>
    </div>
  );
}

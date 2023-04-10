import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./ExpenseHolder.css";
import Card from "./Card/Card";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import { useState } from "react";

export default function ExpenseHolderComponent(props: any) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense: any) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

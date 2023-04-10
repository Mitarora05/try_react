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

  const filteredExpenses = props.items.filter((expense: any) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 ? (
          <p style={{color: "white", textAlign: "center"}}>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense: any) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props: any) => {
    const onSaveExpenseHandler = (enteredExpenseData: any) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddeExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseHandler}/>
    </div>

};

export default NewExpense
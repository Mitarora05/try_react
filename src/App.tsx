import React, { useState } from 'react';
import './App.css';
import ExpenseHolderComponent from './components/ExpenseHolder';
import NewExpense from './components/NewExpense/NewExpense';

const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2024, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense: any) => {
    // setExpenses([expense, ...expense]);
    setExpenses((prevState: any) =>{
      return [expense, ...prevState];
    })
    console.log('app.tsx');
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddeExpense={addExpenseHandler}/>
    <ExpenseHolderComponent items={expenses} />
  </div>
  );
}

export default App;

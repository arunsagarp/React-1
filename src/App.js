import { Expense } from "./components/Expenses/Expense";

import { NewExpense } from "./components/ExpenseForm/NewExpense";
import { useState } from "react";
export const App = () => {
  const addExpense = (expense) => {
    setStateExpense( (prevData) => {
      return [...prevData, expense];
    })
  }
  const expenses = [
    {
      id:"item1",
      name: "Air pods",
      amount: 260,
      date: new Date(2022, 6, 27),
    },
    {
      id:"item2",
      name: "Apple mac m1",
      amount: 920,
      date: new Date(2022, 7, 4),
    },
    {
      id:"item3",
      name: "Clothes",
      amount: 300,
      date: new Date(2022, 8, 27),
    },
  ];
  const [stateExpense, setStateExpense] = useState(expenses);
  return (
    <div>
   <NewExpense addNewExpense={addExpense}/>
   <Expense items = {stateExpense} />
   </div>
  );
};

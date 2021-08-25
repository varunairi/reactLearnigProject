import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from 'react';
const INITIAL_EXPENSES = [
  { id: "e1", title: "Car Insurance", amount: 294.67, date: new Date() },
  { id: "e2", title: "Cable TV", amount: 50, date: new Date(2021, 7, 5) },
  { id: "e3", title: "Maid", amount: 30, date: new Date(2021, 7, 1) },
  { id: "e4", title: "Internet", amount: 15, date: new Date(2021, 7, 10) },
];
function App() {
  
  const[expenseData, setNewExpenseData] = useState(INITIAL_EXPENSES);
  const addExpenseHandler = (expenseData) => {
    console.log(expenseData);
    setNewExpenseData(prevExpenses =>{
      console.log(prevExpenses);
      return [expenseData,...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenseData} />
    </div>
  );
}

export default App;

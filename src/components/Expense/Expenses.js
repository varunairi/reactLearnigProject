import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
import React, { useState } from "react";

function Expenses(props) {
  const [selectedExpenseFilter, setExpenseFilter] = useState("2020");

  const handleFilterChange = (filterValue) => {
    setExpenseFilter(filterValue);
  };
  const expenseItems = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedExpenseFilter
  );
  console.log ("Expense Items Size: ");
  console.log(expenseItems.length);
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedExpenseFilter}
        onFilterChange={handleFilterChange}
      />
      <ExpensesChart expenseItemList={expenseItems} />
      <ExpensesList expenseItems={expenseItems} />
    </Card>
  );
}

export default Expenses;

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [selectedExpenseFilter, setExpenseFilter] = useState("2020");
  console.log("Expenses:" + props.expenses);

  const handleFilterChange = (filterValue) => {
    setExpenseFilter(filterValue);
    console.log(filterValue);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedExpenseFilter}
        onFilterChange={handleFilterChange}
      ></ExpenseFilter>
      {props.expenses.map((expense) => {
        console.log(expense);
        return (
          <ExpenseItem
            key={expense.id}  //Very important. To tell React to make new elements
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
          />
        );
      })}
      ;
    </Card>
  );
}

export default Expenses;

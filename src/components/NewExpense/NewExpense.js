import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddExpense from "./AddExpense";

const NewExpense = (props) => {
  const [buttonClicked, setButtonClicked] = useState("");
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);
  };

  const callButtonClick = () => {
    setButtonClicked("true");
  };
  const resetButtonClick = () => {
    setButtonClicked("false");
  };
  let contents = <AddExpense handleButtonClicked={callButtonClick} />;
  if (buttonClicked === "true") {
    contents = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        handleButtonClicked={resetButtonClick}
      ></ExpenseForm>
    );
  }
  return <div className="new-expense">{contents}</div>;
};

export default NewExpense;

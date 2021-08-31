import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  //changing state of title on button click, use Hook useState
  //this state is tied to only that Instance of component that is called

  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle(title + " Updated!!");
  }
  return (
    //can only have 1 and only 1 root level element
    //CSS classes are referred to as ClassName and not Class
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">Rs {props.amount}</div>
        </div>
        {<button onClick={clickHandler}>Click Here..</button>}
      </Card>
    </li>
  );
};

export default ExpenseItem;

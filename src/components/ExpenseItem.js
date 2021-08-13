import './ExpenseItem.css'

import ExpenseDate  from './ExpenseDate';
function ExpenseItem(props) {
// const expenseDate = new Date();
// const expenseItemName='Car Insurance';
// const expenseItemPrice=294;
  return (
    //can only have 1 and only 1 root level element
    //CSS classes are referred to as ClassName and not Class
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

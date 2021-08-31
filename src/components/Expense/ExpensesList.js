import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expensesContent = <p className="expenses-list__fallback">No Expenses Found.</p>
  if (props.expenseItems.length > 0) {
    expensesContent = props.expenseItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        amount={expense.amount}
        title={expense.title}
        date={expense.date}
      />
    ));
  }
  return (<ul className="expense-list">{expensesContent}</ul>)
}

export default ExpensesList;

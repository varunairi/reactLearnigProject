import './ExpenseDate.css';

function ExpenseDate(props){
    const monthNames = ["Jan", "Feb", "Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

return (
    <div className="expense-date">
        <div className="expense-date__month">{monthNames[props.date.getMonth()]}</div><br></br>
        <div className="expense-date__day">{props.date.getDate()}</div>
      
        <div className="expense-date__year">{props.date.getYear()}</div>
        
    </div>
);
}

export default ExpenseDate;
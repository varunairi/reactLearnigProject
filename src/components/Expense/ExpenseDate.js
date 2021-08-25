import './ExpenseDate.css';

const ExpenseDate = props=>{
    console.log("Date:" + typeof props.date);
    let date=props.date;
    if(typeof(date) === "string")
        date = new Date(date);
    
    const month = date.toLocaleString('default', { month: 'long' });
    const year =  date.toLocaleString('default', { year: 'numeric' });
    const day =  date.toLocaleString('default', { day: 'numeric' });
   
return (
    <div className="expense-date">
        <div className="expense-date__month">{month}</div><br></br>
        <div className="expense-date__day">{day}</div>
      
        <div className="expense-date__year">{year}</div>
        
    </div>
);
}

export default ExpenseDate;
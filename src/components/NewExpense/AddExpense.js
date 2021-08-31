const AddExpense = (props) => {
  const addClickHandler = (event) => {
    event.preventDefault();
    props.handleButtonClicked();
  };
  return (
    <button type="submit" onClick={addClickHandler}>
      Add New Expense
    </button>
  );
};
export default AddExpense;

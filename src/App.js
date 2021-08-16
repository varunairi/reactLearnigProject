
import Expenses from './components/Expense/Expenses';

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date() },
    { title: "Cable TV", amount: 50, date: new Date(2021, 7, 5) },
    { title: "Maid", amount: 30, date: new Date(2021, 7, 1) },
    { title: "Internet", amount: 15, date: new Date(2021, 7, 10) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

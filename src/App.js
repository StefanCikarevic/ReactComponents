import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Car Insurance",
      exponseAmount: 294.66,
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Car Insurance",
      exponseAmount: 294.66,
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Car Insurance",
      exponseAmount: 294.66,
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Car Insurance",
      exponseAmount: 294.66,
    },
  ];
  console.log(expenses);
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem title="Toilet Papire" amount="530" date={new Date(2021, 2, 28)}></ExpenseItem>
      <ExpenseItem title="Toilet Papire" amount="530" date={new Date(2021, 2, 28)}></ExpenseItem>
      <ExpenseItem title="Toilet Papire" amount="530" date={new Date(2021, 2, 28)}></ExpenseItem>
    </div>
  );
}

export default App;

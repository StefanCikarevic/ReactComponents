import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Car Insurance",
      exponseAmount: 295.66,
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Car Insurance",
      exponseAmount: 296.66,
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Car Insurance",
      exponseAmount: 297.66,
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Car Insurance",
      exponseAmount: 298.66,
    },
  ];
  return (
    <div>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;

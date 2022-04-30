import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


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
  const addExpanseHandler = (expense) => {
    console.log("APP");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpanseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;

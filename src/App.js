import Expenses from './components/Expenses/Expenses'
import Card from './components/UI/Card';

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
    <Card>
      <Expenses expenses={expenses}></Expenses>
    </Card>
  );
}

export default App;

import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      {expenses.map((expens, i) => (
        <ExpenseItem
          key={i}
          title={expens.expenseTitle}
          amount={expens.exponseAmount}
          date={expens.expenseDate}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;

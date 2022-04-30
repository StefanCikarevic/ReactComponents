import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const expenses = props.expenses;
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSelectedYear={filterChangeHandler}></ExpensesFilter>
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

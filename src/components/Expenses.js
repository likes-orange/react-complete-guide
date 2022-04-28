import React, { useState } from "react";

import Card from "../components/common/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020);

  const filteredExpenseData = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const changeFilteredYearHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilteredYear={changeFilteredYearHandler}
        />
        <ExpenseList expenses={filteredExpenseData} />
      </Card>
    </div>
  );
};

export default Expenses;

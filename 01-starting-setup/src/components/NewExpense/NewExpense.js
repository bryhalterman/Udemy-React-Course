import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    toggleFormHandler();
  };

  const toggleFormHandler = () => {
    setShowForm((stateVal) => {
      return !stateVal;
    });
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={toggleFormHandler}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

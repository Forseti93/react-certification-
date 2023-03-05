import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";

const Budget = () => {
  const { budget, dispatch, expenses } = useContext(AppContext);

  const updateBudget = (e) => {
    dispatch({
      type: "SET_BUDGET",
      payload: e.target.value,
    });
  };

  const expensesLessBudget = () => {
    const allExpenses = expenses.reduce((sum, val) => {
      return sum + +val.cost;
    }, 0);

    return (allExpenses <= budget);
  };

  console.log("wtf");

  return (
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">
        Budget:
      </span>
      <input
        value={budget}
        onChange={(e) => updateBudget(e)}
        type="number"
        step="10"
        className="form-control"
        placeholder="Budget"
      />
    </div>
  );
};

export default Budget;

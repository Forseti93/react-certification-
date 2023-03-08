import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { CurrencySymbol } from "./CurrencySymbol";

const Budget = () => {
  const { budget, dispatch, expenses } = useContext(AppContext);

  const allExpenses = expenses.reduce((sum, val) => {
    return sum + +val.cost;
  }, 0);

  const isBudgetMoreExpenses = (value) => {
    return allExpenses <= value;
  };

  const updateBudget = (e) => {
    dispatch({
      type: "SET_BUDGET",
      payload: e.target.value,
    });

    if (!isBudgetMoreExpenses(e.target.value)) {
      console.log("set low");
      dispatch({
        type: "TOGGLE_REMAINING_LOW",
        payload: true,
      });
      dispatch({
        type: "SET_BUDGET",
        payload: allExpenses,
      });
    } else {
      console.log("set not low");
      dispatch({
        type: "TOGGLE_REMAINING_LOW",
        payload: false,
      });
    }
  };

  return (
    <div className="input-group">
      {/* can be changed on the LabeledInput component */}
      <span className="input-group-text" id="basic-addon1">
        Budget:
        <CurrencySymbol />
      </span>
      <input
        value={budget}
        onChange={updateBudget}
        type="number"
        step="10"
        className="form-control"
        placeholder="Budget"
      />
    </div>
  );
};

export default Budget;

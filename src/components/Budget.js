import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

const Budget = () => {
  const { budget, dispatch, expenses } = useContext(AppContext);

  const expensesLessBudget = () => {
    const allExpenses = expenses.reduce((sum, val) => {
      return sum + +val.cost;
    }, 0);
    console.log("allExpenses: ",allExpenses);
    console.log("budget: ",budget);

    return allExpenses <= budget;
  };

  const updateBudget = (e) => {
    dispatch({
      type: "SET_BUDGET",
      payload: e.target.value,
    });
    
    if (!expensesLessBudget()) {
      console.log("set low");
      dispatch({
        type: "TOGGLE_REMAINING_LOW",
        payload: true,
      });
      // to focus on input and disable other options
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
      <span className="input-group-text" id="basic-addon1">
        Budget:
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

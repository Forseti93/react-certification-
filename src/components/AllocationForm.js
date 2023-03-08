import React, { useContext, useState } from "react";
import { LabeledSelect } from "./LabledSelect";
import { AppContext, actions } from "../context/AppProvider";
import { LabeledInput } from "./LabeledInput";

const AllocationForm = () => {
  const { expenses, dispatch, budget } = useContext(AppContext);
  const [expenseName, setExpenseName] = useState(expenses[0].name);
  const [action, setAction] = useState(actions[0]);
  const [number, setNumber] = useState("");

  // to toggle class name on error
  const handleErrorVisualization = (errorToShowMS) => {
    dispatch({
      type: "TOGGLE_REMAINING_LOW",
      payload: true,
    });
  };

  // to check, does the new expense has appropriate cost
  const expenseCostAppropriate = (cost) => {
    const allExpenses = expenses.reduce((sum, val) => {
      return sum + +val.cost;
    }, 0);
    return +budget - +allExpenses - +cost >= 0 ? true : false;
  };

  //   to pass special change handlers
  const handleChange = (event, label) => {
    const value = event.target.value;
    switch (label) {
      case "Item":
        setExpenseName(value);
        break;
      case "Action":
        setAction(value);
        break;
      case "Number":
        if (expenseCostAppropriate(value)) {
          setNumber(value);
        } else {
          handleErrorVisualization(300);
          setNumber((prev) => prev);
        }
        break;

      default:
        return console.log(
          `See the handleChange function in the AllocationForm`
        );
    }
  };

  // to update state, depending on select elements
  const submitHandler = () => {
    const data = {
      name: expenseName,
      cost: +number,
    };
    switch (action) {
      case actions[0]:
        // "add monthly budget"
        dispatch({
          type: "ADD_EXPENSE",
          payload: data,
        });
        break;
      case actions[1]:
        // "minus monthly budget"
        dispatch({
          type: "ADD_EXPENSE",
          payload: { ...data, cost: -data.cost },
        });
        break;
      case actions[2]:
        // "clear monthly budget"
        dispatch({
          type: "CLEAR_EXPENSE",
          payload: data.name,
        });
        break;
      case actions[3]:
        // "set monthly budget"
        dispatch({
          type: "CLEAR_EXPENSE",
          payload: data.name,
        });
        dispatch({
          type: "ADD_EXPENSE",
          payload: data,
        });
        break;

      default:
        return console.log(`see the submitHandler function in Allocation form`);
    }
  };

  const handleKeyDown = (event) => {
    if (
      event.key === "e" ||
      event.key === "+" ||
      event.key === "-" ||
      event.key === "."
    ) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <h3 className="mt-3">Change Allocation</h3>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md mt-2">
            <LabeledSelect
              type="text"
              value={expenseName}
              label={"Item"}
              handleChange={handleChange}
            />
          </div>
          <div className="col-md mt-2">
            <LabeledSelect
              type="text"
              value={action}
              label={"Action"}
              actions={actions}
              handleChange={handleChange}
            />
          </div>

          <div className="col-md mt-2">
            <LabeledInput
              value={number}
              type="number"
              step="10"
              label={"Number"}
              disabled={action === "clear monthly budget"}
              handleKeyDown={handleKeyDown}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="container text-center ">
        <button
          onClick={submitHandler}
          type="button"
          className="mt-3 w-100 btn btn-primary"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default AllocationForm;

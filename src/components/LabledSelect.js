import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export const LabeledSelect = (props) => {
  const { expenses } = useContext(AppContext);

  const options = () => {
    switch (props.label) {
      case "Item":
        return expenses.map((expense, ind) => {
          return (
            <option value={expenses[ind].name} key={ind}>
              {expense.name}
            </option>
          );
        });
      case "Action":
        return props.actions.map((action, ind) => {
          return (
            <option value={action} key={ind}>
              {action}
            </option>
          );
        });

      default:
        return "nothing";
    }
  };

  const labelString = ((e) => {
    if (e.length === 0) return "Please, add new item";
    return e[0].name;
  })(expenses);

  return (
    <div className="input-group">
      <label className="input-group-text" htmlFor="inputGroupSelect01">
        {props.label}
      </label>
      <select
        className="form-select"
        id="inputGroupSelect01"
        onChange={(e) => props.handleChange(e, props.label)}
        defaultValue={labelString}
      >
        {options()}
      </select>
    </div>
  );
};

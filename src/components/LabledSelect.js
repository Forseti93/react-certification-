import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export const LabeledSelect = (props) => {
  const { expenses, currencies } = useContext(AppContext);

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
      case "Currency":
        return Object.keys(currencies).map((key) => {
          return (
            <option value={key} key={nanoid()}>
              {`${currencies[key].symbol} ${key}`}
            </option>
          );
        });

      default:
        return "nothing";
    }
  };

  return (
    <div className="input-group">
      <label className="input-group-text" htmlFor="inputGroupSelect01">
        {props.label}
      </label>
      <select
        value={props.value}
        className="form-select"
        id="inputGroupSelect01"
        onChange={(e) => props.handleChange(e, props.label)}
      >
        {options()}
      </select>
    </div>
  );
};

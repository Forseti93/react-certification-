import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export const LabledInput = (props) => {
  return (
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">
        {props.label}
      </span>
      <input
        value={props.value}
        disabled={props.disabled}
        type={props.type}
        step={props.step}
        className="form-control"
        placeholder="type a number"
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={(e) => props.handleChange(e, props.label)}
      />
    </div>
  );
};

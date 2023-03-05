import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export const Input = (props) => {

const validateNumberInput = (event)=>{
  if (
    event.key === "e" ||
    event.key === "+" ||
    event.key === "-" ||
    event.key === "."
  ) {
    event.preventDefault();
  }
}

  return (
    <span>
      <input
        name={props.name}
        type={props.type}
        value={props.value ? props.value : ""}
        step={props.step}
        className="form-control"
        style={{ width: "auto" }}
        placeholder={props.placeholder}
        onKeyDown={(e) => {
          if (props.type === "number") {
            validateNumberInput(e)
          }
        }}
        onChange={(e) => props.changeHandler(e)}
      />
    </span>
  );
};

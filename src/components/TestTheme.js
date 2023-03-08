import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const TestTheme = () => {
  const { dispatch, backgroundColor, color } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor,
        color,
        display: "flex",
        borderRadius: "5px",
        width: "fit-content",
        margin: "20px",
      }}
    >
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={(e) => {
            dispatch({ type: "toggleThemeMode" });
          }}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Night mode
        </label>
      </div>
    </div>
  );
};

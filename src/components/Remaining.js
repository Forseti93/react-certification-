import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/AppProvider";
import cn from "classnames";
import styles from "../style_modules/Remaining.module.css";
import { CurrencySymbol } from "./CurrencySymbol";

export const Remaining = ({ className }) => {
  const { expenses, budget, remainingLow, dispatch } = useContext(AppContext);
  const timeout = useRef(null);

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      dispatch({
        type: "TOGGLE_REMAINING_LOW",
        payload: false,
      });
    }, 400);

    return () => {
      clearTimeout(timeout.current);
    };
  }, [remainingLow, dispatch]);
  const remainingBudget = expenses.reduce((acc, val) => {
    return acc - val.cost;
  }, budget);

  return (
    <div className={cn(className, { [styles.redBorderShaking]: remainingLow })}>
      Remaining: {remainingBudget} <CurrencySymbol/>
    </div>
  );
};

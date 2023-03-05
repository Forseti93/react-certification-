import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import cn from "classnames";
import styles from "../style_modules/Remaining.module.css";

export const Remaining = ({ className }) => {
  const { expenses, budget, remainingLow } = useContext(AppContext);

  const remainingBudget = expenses.reduce((acc, val) => {
    return acc - val.cost;
  }, budget);

  return (
    <div className={cn(className, { [styles.redBorderShaking]: remainingLow })}>
      Remaining: {remainingBudget}
    </div>
  );
};

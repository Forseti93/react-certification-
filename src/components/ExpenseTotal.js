import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { CurrencySymbol } from "./CurrencySymbol";


export const ExpenseTotal = ({className}) => {
  const { expenses } = useContext(AppContext);
  const allExpenses = expenses.reduce((acc, val) => {
    return acc + +val.cost;
  }, 0);

  return (
      <div className={className}>Total expenses: {allExpenses} <CurrencySymbol /></div>
  );
};

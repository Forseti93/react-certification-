import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";
import { ThemeContext } from "../context/ThemeProvider";
import { AddExpenseItem } from "./AddExpenseItem";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseList = () => {
  const [amount, setAmount] = useState(10);
  const { backgroundColor, color } = useContext(ThemeContext);
  const { expenses } = useContext(AppContext);

  return (
    <div>
      <table
        className="table"
        style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
      >
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Monthly budget</th>
            <th scope="col" style={{ textAlign: "center" }}>
              <span
                style={{ textDecoration: "underline" }}
                onClick={() => setAmount((prev) => prev + 10)}
              >
                {amount}
              </span>
              &nbsp;/&nbsp;
              <span
                onClick={() => setAmount(10)}
                style={{ textDecoration: "underline" }}
              >
                Reset
              </span>
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Clear / Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((el) => {
            // {id: "Marketing", name: "Marketing", cost: 50 }
            const { name, cost, id } = el;
            return (
              <ExpenseItem
                name={name}
                cost={cost}
                key={id}
                id={id}
                amount={amount}
              />
            );
          })}
          <AddExpenseItem />
        </tbody>
      </table>
    </div>
  );
};

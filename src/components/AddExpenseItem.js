import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";
import styles from "../style_modules/AddExpenseItem.module.css";
import { Input } from "./Input";
import { nanoid } from "nanoid";

export const AddExpenseItem = () => {
  // expense instance: { id: "Gas", name: "Gas", cost: 1700 },
  const [newExpense, setNewExpense] = useState({
    id: "",
    name: "",
    cost: null,
  });
  const [itemIsAdding, setItemIsAdding] = useState(false);
  const { dispatch } = useContext(AppContext);

  const showForm = () => {
    setItemIsAdding(true);
  };

  const changeHandler = (e) => {
    const val = e.target.value;
    setNewExpense((prev) => {
      return {
        ...prev,
        [e.target.name]: val,
      };
    });
  };

  const handleAddExpense = () => {
    const { id, name, cost } = newExpense;
    if (id || name || cost) {
      dispatch({
        type: "ADD_NEW_EXPENSE",
        payload: { ...newExpense, id: nanoid() },
      });
    }
    setNewExpense({ id: "", name: "", cost: null });
  };

  if (!itemIsAdding) {
    return (
      <tr className={styles.tableRow}>
        <td onClick={showForm}>
          <i className="material-icons">&#xe03b;</i>
        </td>
        <td onClick={showForm}>Add new item</td>
        <td></td>
        <td></td>
      </tr>
    );
  } else {
    return (
      <tr className={styles.tableRow}>
        <td>
          <Input
            name="name"
            type="text"
            placeholder="item?"
            value={newExpense.name}
            changeHandler={changeHandler}
          />
        </td>
        <td>
          <Input
            name="cost"
            type="number"
            step="10"
            placeholder="value?"
            value={newExpense.cost}
            changeHandler={changeHandler}
          />
        </td>
        <td></td>
        <td onClick={handleAddExpense}>
          <u>Add</u>
        </td>
      </tr>
    );
  }
};

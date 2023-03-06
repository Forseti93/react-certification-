import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";
import { LabeledSelect } from "./LabledSelect";

export const Currency = () => {
  const { dispatch, currency, currencies } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const handleChange = (e) => {
    const currencyCode = e.target.value;

    dispatch({
      type: "CHG_CURRENCY",
      payload: currencies[currencyCode].symbol,
    });

    setSelectedCurrency(e.target.value)
  };

  return (
    <LabeledSelect
      handleChange={handleChange}
      label="Currency"
      type="text"
      value={selectedCurrency}
    />
  );
};

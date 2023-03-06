import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider.js";

export const CurrencySymbol = () => {
  const { currency } = useContext(AppContext);

  return <span>&nbsp;{currency}&nbsp;</span>;
};

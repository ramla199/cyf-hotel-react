import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Oders = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {orderType}: {orders}{" "}
      <SearchButton title="add" orders={orders} orderOne={orderOne} />
    </li>
  );
};

export default Oders;

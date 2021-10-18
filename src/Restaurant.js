import React from "react";
import Orders from "./Oders";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {/* it render each time */}
        <Orders orderType="Pizzas" />
        <Orders orderType="Salads" />
        <Orders orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

// export default order;

export default Restaurant;

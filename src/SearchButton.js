import React from "react";
const SearchButton = ({ title, orders, orderOne }) => {
  return (
    <button className="btn btn-primary" onClick={orderOne}>
      {title}
    </button>
  );
};

export default SearchButton;

import React from "react";
import Table from "./Table";

const SearchResults = ({ results }) => {
  console.log(results);
  return <Table table={results} />;
};

export default SearchResults;

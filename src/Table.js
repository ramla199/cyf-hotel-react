import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import TableBody from "./TableBody";
const Table = ({ table }) => {
  const [selectedId, setSelectedId] = useState("");
  const handleClickButton = id => {
    setSelectedId(id);
  };
  return (
    <>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First-Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room-Id</th>
            <th scope="col">Check-In-Date</th>
            <th scope="col">Check-Out-Date</th>
          </tr>
        </thead>
        <tbody>
          {table &&
            table.map(tb => (
              <TableBody key={tb.id} tb={tb} clicked={handleClickButton} />
            ))}
        </tbody>
      </table>
      <CustomerProfile id={selectedId} />
    </>
  );
};

export default Table;

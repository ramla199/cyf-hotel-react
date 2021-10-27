import React, { useState } from "react";
// import moment from "moment";

const TableBody = ({ tb: t, clicked }) => {
  // const t = props.tb;
  const [selectedRow, setSelectedRow] = useState(false);
  const changeColor = () => setSelectedRow(selectedRow => !selectedRow);
  const getId = () => clicked(t.id);
  return (
    <tr className={selectedRow ? "table1" : ""} onClick={changeColor}>
      <th scope="row">{t.id}</th>
      <td>{t.title}</td>
      <td>{t.firstName}</td>
      <td>{t.surname}</td>
      <td>{t.email}</td>
      <td>{t.roomId}</td>
      <td>{t.checkInDate}</td>
      <td>{t.checkOutDate}</td>
      <td>
        <button className="btn btn-primary" onClick={getId}>
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default TableBody;

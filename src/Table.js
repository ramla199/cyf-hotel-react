import React from "react";
// import TableHead from "./TableHead";
// import TableBody from "./TableBody";
const Table = ({ table }) => {
  console.log(table);
  return (
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
          table.map(t => (
            <tr key={t.id}>
              <th scope="row">{t.id}</th>
              <td>{t.title}</td>
              <td>{t.firstName}</td>
              <td>{t.surname}</td>
              <td>{t.email}</td>
              <td>{t.roomId}</td>
              <td>{t.checkInDate}</td>
              <td>{t.checkOutDate}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;

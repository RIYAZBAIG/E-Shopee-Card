import React, { useState, useEffect } from "react";

export const UserList = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setData(result));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="sub">
      <table>
        <tr>
          <td>Name</td>
          <td>User Name</td>
          <td>Email</td>
          <td>City</td>
          <td>Logitude</td>
          <td>Company Name</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.city}</td>
            <td>{item.address.geo.lng}</td>
            <td>{item.company.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

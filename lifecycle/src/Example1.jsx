import React, { useState, useEffect } from "react";

function Example1() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const getdata = async () => {
    let res = await fetch(url);
    let d = await res.json();
    setData(d);
  };
  useEffect(
    () =>
      //     {
      //     fetch(url)
      //       .then((res) => res.json())
      //       .then((d) => setData(d))
      //       .catch((err) => console.log(err));
      //   },
      getdata(),
    []
  );
  return (
    <>
      <h1>Performing Async Operations in react</h1>
      <h2>All data of 10 users</h2>
      <table border={2} cellPadding={15} style={{ borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "Black", color: "white" }}>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone no</th>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Example1;

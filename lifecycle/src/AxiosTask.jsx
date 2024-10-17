import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosTask() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function rowHandler(id) {
    const newData = data.find((ele) => ele.id == id);
    setSelectedData(JSON.stringify(newData));
    console.log(newData);
    console.log(selectedData);
  }
  return (
    <>
      <h1>Axios</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr onClick={() => rowHandler(e.id)}>
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
      <div style={{ marginTop: "70px" }}>
        {selectedData && <div>{selectedData}</div>}
      </div>
    </>
  );
}

export default AxiosTask;

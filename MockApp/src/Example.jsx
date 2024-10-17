import React, { useState, useEffect } from "react";
import axios from "axios";
function Example() {
  const [data, setData] = useState([]);
  let fetchdata = async () => {
    // let res = await fetch("https://jsonplaceholder.typicode.com/users");
    // let d = await res.json();
    let d = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(d.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  console.log(data);
  return (
    <div>
      {data.map((e) => {
        return <p>{e.username}</p>;
      })}
    </div>
  );
}

export default Example;

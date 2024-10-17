import React, { useEffect, useState } from "react";

function Example3() {
  const [count, setCount] = useState(0);
  const [bgcolor, setBgcolor] = useState("white");
  useEffect(() => {
    if (count > 0 && count % 2 === 0) setBgcolor("red");
    else if (count > 0 && count % 2 != 0) setBgcolor("green");
    else if (count < 0) setBgcolor("yellow");
    else setBgcolor("white");
  }, [count]);
  return (
    <>
      <h1>Using Dependancies in UseEffect</h1>
      <div
        style={{
          height: "200px",
          textAlign: "center",
          border: "2px solid black",
          width: "500px",
          margin: "auto",
          backgroundColor: bgcolor,
          alignContent: "center",
        }}
      >
        <button onClick={() => setCount(count + 1)}>+</button>
        <b>{count}</b>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  );
}

export default Example3;

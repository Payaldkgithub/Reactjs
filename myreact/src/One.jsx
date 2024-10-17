import React from "react";
import { useState } from "react";
export function One() {
  let [count, setCount] = useState(0);
  let [bgColor, setColor] = useState("white");
  function handleIncrement() {
    setCount(++count);
    changeBackground();
  }
  function handleDecrement() {
    setCount(--count);
    changeBackground();
  }
  function changeBackground() {
    if (count < 0) setColor("black");
    else if (count === 0) setColor("white");
    else if (count > 0 && count <= 5) setColor("yellow");
    else if (count === 6) setColor("green");
    else if (count > 6 && count <= 10) setColor("blue");
    else setColor("red");
  }

  return (
    <>
      <div className="main" style={{ backgroundColor: bgColor }}>
        <button class="abc" onClick={handleIncrement}>
          +
        </button>
        <span style={{ fontSize: "40px", padding: "10px" }}>{count}</span>
        <button class="abc" onClick={handleDecrement}>
          -
        </button>
      </div>
    </>
  );
}
//export default One;

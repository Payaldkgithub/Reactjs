import React from "react";
import { useCount } from "../context/CountContext";
import { useColor } from "../context/ColorContext";

function Child3() {
  let { count, setCount } = useCount();
  let { color, setColor } = useColor();
  return (
    <div style={{ backgroundColor: color, padding: "10px" }}>
      Child3
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() =>
          setColor((pre) => {
            if (pre == "red") {
              return "green";
            } else return "red";
          })
        }
      >
        Change Color
      </button>
    </div>
  );
}

export default Child3;

import React, { useContext } from "react";
import Child3 from "./Child3";
import countContext from "./CountContext";

function Child2() {
  const count = useContext(countContext);
  console.log("Child2", count);
  return (
    <div>
      <h1>Child2</h1>
      <Child3></Child3>
    </div>
  );
}

export default Child2;

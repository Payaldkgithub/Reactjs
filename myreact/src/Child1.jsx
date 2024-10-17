import React, { useContext } from "react";
import Child2 from "./Child2";
import countContext from "./CountContext";

function Child1() {
  const count = useContext(countContext);
  console.log("child1", count);
  return (
    <div>
      <h1>Child1</h1>
      <Child2></Child2>
    </div>
  );
}

export default Child1;

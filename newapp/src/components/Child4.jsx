import React from "react";
import { useCount } from "../context/CountContext";

function Child4() {
  let { count, setCount } = useCount();
  return (
    <div>
      Child4
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Child4;

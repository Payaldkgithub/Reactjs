import React, { useState } from "react";

function StateHook() {
  const [count, setCount] = useState(0);
  return (
    <>
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}

export default StateHook;

import { useState } from "react";

function ConditionalRendering() {
  const [flag, setFlag] = useState(true);
  const [number, setNumber] = useState(24);
  return (
    <>
      <h1>Conditional Rendering</h1>
      {flag ? <h1>All the best</h1> : <h1>Better Luck for next time</h1>}
      {number % 2 === 0 && <h1>{number} is even</h1>}
    </>
  );
}
export default ConditionalRendering;

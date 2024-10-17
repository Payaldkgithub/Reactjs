import React from "react";
import { useState } from "react";
export function Six() {
  let [count, setCount] = useState(0);
  let [prime, setPrime] = useState("");
  let [num, setEven] = useState(" ");

  function handleIncrement() {
    setCount(++count);
    primeNumber(count);
    evenNumber(count);
  }
  function handleDecrement() {
    setCount(--count);
    primeNumber(count);
    evenNumber(count);
  }
  function evenNumber(count) {
    if (count % 2 === 0) setEven(`${count} is even`);
    else setEven(`${count} is Odd`);
  }
  function primeNumber(count) {
    let c = 0;
    let n = count;
    if (n === 0) {
      setPrime(`${n} is Zero`);
    } else {
      for (let i = 1; i <= Math.trunc(n / 2); i++) {
        if (n % i === 0) c++;
      }
      if (c === 1) {
        setPrime(`${n} is prime no`);
      } else {
        setPrime(`${n} is not prime`);
      }
    }
  }

  return (
    <>
      <div className="main">
        <section>
          <button class="abc" onClick={handleIncrement}>
            +
          </button>
          <span style={{ fontSize: "30px", padding: "10px" }}>{count}</span>
          <button class="abc" onClick={handleDecrement}>
            -
          </button>
          <br />
          <h3>{prime}</h3>
          <h3>{num}</h3>
        </section>
      </div>
    </>
  );
}
//export default One;

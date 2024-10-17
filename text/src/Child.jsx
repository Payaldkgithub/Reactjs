import React from "react";
function Child({ name, getAddress }) {
  let address = "Banglore";
  function handleClick() {
    getAddress(address);
  }
  return (
    <div>
      <h1>This is child component</h1>
      <button onClick={handleClick}>Send Data</button>
      <br></br>
      <b>{name}</b>
    </div>
  );
}
export default Child;

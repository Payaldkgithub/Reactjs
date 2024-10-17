import React from "react";

function PropsDrilling({ name, address }) {
  let add = "banglore";
  //   function handleClick() {
  //     address(add);
  //   }
  return (
    <>
      {address(add)}
      {/* <button onClick={handleClick}>send data</button> */}
    </>
  );
}

export default PropsDrilling;

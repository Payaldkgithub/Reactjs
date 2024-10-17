import React, { useContext } from "react";
import countContext from "./CountContext";

function Child3() {
  const count = useContext(countContext);
  console.log("child3", count);
  return <div>Child3</div>;
}

export default Child3;

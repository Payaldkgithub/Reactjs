import React from "react";
import Child3 from "./Child3";
import { FaAppleWhole } from "react-icons/fa6";

function Child1() {
  return (
    <div>
      Child1
      <FaAppleWhole></FaAppleWhole>
      <Child3></Child3>
    </div>
  );
}

export default Child1;

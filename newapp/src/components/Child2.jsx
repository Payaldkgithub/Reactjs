import React from "react";
import Child4 from "./Child4";
import { useColor } from "../context/ColorContext";

function Child2() {
  let { color, setColor } = useColor();
  return (
    <div>
      Child2
      <h1>{color}Hello payal</h1>
      <Child4></Child4>
    </div>
  );
}

export default Child2;

import React from "react";
import { useStudent } from "./studentContext";

function Child1() {
  const data = useStudent();
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.institute}</h1>
      <h1>{data.course}</h1>
    </div>
  );
}

export default Child1;

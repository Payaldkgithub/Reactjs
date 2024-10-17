import React from "react";
import { useStudent } from "./Student";

function Child3() {
  const std = useStudent();
  return (
    <div>
      <h1>Student Name :{std.fname}</h1>
      <h1>Student Age :{std.age}</h1>
      <h1>Student City :{std.address}</h1>
      <h1>Student Course :{std.course}</h1>
    </div>
  );
}

export default Child3;

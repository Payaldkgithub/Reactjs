import React from "react";
import ClassLifeCycle from "./ClassLifecycle";
import { useState } from "react";
import UseEffect from "./UseEffect";
import Example1 from "./Example1";
import Eaxmple2 from "./Eaxmple2";
import Example3 from "./Example3";
import Stopwatch from "./Stopwatch";
import Axios from "./Axios";
import AxiosTask from "./AxiosTask";

function App() {
  // const [flag, setFlag] = useState(true);
  return (
    <>
      {/* <button onClick={() => setFlag(!flag)}>
        {flag ? "Remove Component" : "Add Component"}
      </button>
      
      {flag && <ClassLifeCycle color="green"></ClassLifeCycle>} */}
      <AxiosTask></AxiosTask>
      <Axios></Axios>
      <Stopwatch></Stopwatch>
      {/* <Example3></Example3> */}
      {/* <Eaxmple2></Eaxmple2> */}
      {/* <Example1></Example1> */}
      {/* <UseEffect></UseEffect> */}
    </>
  );
}

export default App;

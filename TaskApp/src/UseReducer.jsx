import React from "react";
import { useReducer } from "react";
import { reducer } from "./Reducer";

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      UseReducer
      {state}
      <button onClick={() => dispatch({ type: "inc1", payload: 5 })}>
        Inc1
      </button>
      <button onClick={() => dispatch({ type: "dec1" })}>Dec1</button>
    </div>
  );
}

export default UseReducer;

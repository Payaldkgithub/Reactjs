import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "./redux/actions/countActions";
1;
function Child() {
  const count = useSelector((store) => store.countReducer);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Child component</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(Increment())}>Inc</button>
      <button onClick={() => dispatch(Decrement())}>Dec</button>
    </>
  );
}

export default Child;

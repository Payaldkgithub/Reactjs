import React from "react";
import Memo from "./Memo";
import Callback from "./Callback";
import NewComponent from "./Child";
import NewComponent2 from "./Child2";
import Todo from "./Todo";
import { TodoContextWrapper } from "./context/TodoContext";
import Counter from "./Counter";

function App() {
  return (
    <>
      {<Counter />}
      <TodoContextWrapper>
        <Todo />
      </TodoContextWrapper>
      {<Memo />}
      {<Callback />}
      <NewComponent name={"Virat"} />
      <NewComponent name={"Rohit"} />
      <NewComponent2 age={20} />
      <NewComponent2 age={15} />
    </>
  );
}

export default App;

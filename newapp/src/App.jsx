import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CountContextWrapper } from "./context/CountContext";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import { ColorContextWrapper } from "./context/ColorContext";
import Bootstrap from "./components/Bootstrap";

function App() {
  return (
    <>
      <CountContextWrapper>
        <ColorContextWrapper>
          <Bootstrap></Bootstrap>
          <Child1></Child1>
          <Child2></Child2>
        </ColorContextWrapper>
      </CountContextWrapper>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Props, { PropsExample } from "./Props";
// import PropsDrilling from "./PropsDrilling";
// import { StateClass } from "./StateClass";
// import StateHook from "./StateHook";
// import ControlledForm from "./ControlledForm";
// import UncontrolledForm from "./UncontrolledForm";
// import { StudentContextWrapper } from "./studentContext";
// import Child1 from "./Child1";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import UseReducer from "./UseReducer";
function App() {
  let data = { id: "101", name: "kevu", age: "2" };
  function getdata(data) {
    console.log(data);
  }
  return (
    <>
      <UseReducer></UseReducer>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <StudentContextWrapper>
        <Child1></Child1>
      </StudentContextWrapper>
      <UncontrolledForm></UncontrolledForm>
      <ControlledForm></ControlledForm>
      <Props name="payal" course="MERN" data={data}>
        {"Hello i m children of function props component"}
      </Props>
      <PropsExample name="dk" course="MERN">
        {"Hello i m children of class props component"}
      </PropsExample>
      <PropsDrilling name="props drilling" address={getdata}></PropsDrilling>
      <StateClass></StateClass>
      <StateHook></StateHook> */}
    </>
  );
}

export default App;

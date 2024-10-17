import React from "react";
import Country from "./Country";
import Example from "./Example";
import Navbar from "./navbar";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentWrapper } from "./StudentContext";

function App() {
  return (
    <div>
      {/* <Country></Country> */}
      <StudentWrapper>

      
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <Route path="sub" element="<Home/>"></Route>
            <Route path="blog" element="<About/>"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </StudentWrapper>

      {/* <Example></Example> */}
    </div>
  );
}

export default App;

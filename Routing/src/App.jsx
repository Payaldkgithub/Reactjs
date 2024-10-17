import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import ErrorPage from "./ErrorPage";
import Login from "./Login";
import NavBar from "./NavBar";
import Subscription from "./Subscription";
import Blogs from "./Blogs";
import Career from "./Career";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <Route path="sub" element={<Subscription />}></Route>
            <Route path="blogs" element={<Blogs />}></Route>
            <Route path="career" element={<Career />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

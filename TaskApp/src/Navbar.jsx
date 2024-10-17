import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ height: "50px", backgroundColor: "black", color: "white" }}>
      <NavLink to="/">Home</NavLink>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;

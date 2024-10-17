import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useStudent } from "./StudentContext";
function Navbar() {
  let data = useStudent();
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.city}</p>
      <Link to="/">Home</Link>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}

export default Navbar;

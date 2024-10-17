import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to home page</h1>
      <Link to="/about">About</Link>
      <br />
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default Home;

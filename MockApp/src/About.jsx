import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      about
      <Outlet />
      <Link to="sub">SUB</Link>
      <Link to="Blog">Blog</Link>
    </div>
  );
}

export default About;

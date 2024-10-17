import React from "react";
import { Link, Outlet } from "react-router-dom";
function About() {
  return (
    <div>
      <h1>This is About page</h1>
      <div
        style={{
          display: "grid",
          width: "100px",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="sub">Subscription</Link>
        <Link to="blogs">Blogs</Link>
        <Link to="career">career</Link>
      </div>

      <div
        style={{
          padding: "10px",
          height: "100px",
          width: "400px",
          margin: "auto",
          backgroundColor: "red",
          fontSize: "20px",
          color: "white",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default About;

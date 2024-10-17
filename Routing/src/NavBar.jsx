import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="logo">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/947/674/small/js-alphabet-letters-initials-monogram-logo-sj-j-and-s-vector.jpg"
            alt=""
            height="50px"
          />
        </div>
        <div className="d-flex column-gap-5">
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/about" className="link">
            About
          </NavLink>
          <NavLink to="/contact" className="link">
            Contact
          </NavLink>
          <NavLink to="/product" className="link">
            Product
          </NavLink>
        </div>
        <div className="login ">
          <Link to="/login">
            <button className="btn btn-danger ps-4 pe-4">Login</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

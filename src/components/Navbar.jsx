import React from "react";
import "./Navbar.css";
import logo from "../utils/brand_logo.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar-brand">
        <img src={logo} alt="logo" />
        <ul className="list-links">
          <li>MENU </li>
          <li>LOCATION </li>
          <li>ABOUT </li>
          <li>CONTACT </li>
        </ul>
        <button className="btn-1"> Login </button>
      </div>
    </>
  );
};

export default Navbar;

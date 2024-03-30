import React from "react";
import navlogo from '../images/navlogo.png';
import { FaUser } from "react-icons/fa";
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={navlogo} alt="logo"></img>
        {/* <h3>Logo</h3> */}
      </div>
      <div className="nav-items">
        <a href="#">Fitness</a>
        <a href="#">Cure</a>
        <a href="#">Mind</a>
        <a href="#">Store</a>
      </div>
      <div className="profile">
        <FaUser />
      </div>
    </div>
  );
}

export default Navbar;

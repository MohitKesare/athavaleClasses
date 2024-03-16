import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="./assets/logo.svg" alt="logo" />
        <h3>Athavale Classes</h3>
      </div>
      <div className="nav-content ">
        <Link to={"/"}>
          <div className="nav-element">Home</div>
        </Link>
        <Link to={"/"}>
          <div className="nav-element">Batch Info</div>
        </Link>
        <Link to={"/"}>
          <div className="nav-element">Fees Structure</div>
        </Link>
        <Link to={"/"}>
          <div className="nav-element">Student Results</div>
        </Link>
        <Link to={"/"}>
          <button className="nav-element nav-btn">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

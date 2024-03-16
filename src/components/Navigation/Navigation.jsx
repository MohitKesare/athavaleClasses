import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="header">
      <div className="navi-logo">
        <img src="./assets/logo.svg" />
        <h3>Athavale Classes</h3>
      </div>
      <nav ref={navRef} className="nav-list">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/courses">Our Courses</Link>
        <Link to="/toppers">Toppers</Link>
        <Link to="/contact">Contact</Link>
        <button className="nav-button">Apply Now</button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navigation;

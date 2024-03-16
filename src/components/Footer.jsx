import React from "react";
import "../styles/footer.css";
import { FaSquareFacebook, FaSquareTwitter, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaSquareYoutube } from "react-icons/fa6";
import Map from "./Map";

const Footer = () => {
  return (
    <div className="footer">
      <div className="classes">
        <div className="classes-section">
          <div className="classes-head">
            <img src="./assets/logo.svg" />
            <p>Athavale Classes</p>
          </div>
          <div className="classes-desc">
            <p>
              Athavale Classes: Master Math (XI, XII, CET) with passion,
              practice & personalized coaching. Build a strong foundation &
              become a well-rounded student
            </p>
          </div>
          <div className="classes-media">
            <div className="icon">
              <FaSquareFacebook />
            </div>
            <div className="icon">
              <Link
                to="https://www.youtube.com/@vinayakathavale8326"
                target="_blank"
              >
                <FaSquareYoutube />
              </Link>
            </div>

            <div className="icon">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="links">
        <h3>Quick Links</h3>
        <div className="link">
          <Link>Home</Link>
        </div>
        <div className="link">
          <Link to={"/about"}>About us</Link>
        </div>
        <div className="link">
          <Link to={"/courses"}>Our Courses</Link>
        </div>
        <div className="link">
          <Link>Toppers</Link>
        </div>
        <div className="link">
          <Link to={"/contact"}>Contact us</Link>
        </div>
      </div>
      <div className="map">
        <h3>Map Location</h3>
        <div className="footer-map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import "./ContactPage.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import Map from "../Map";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateId = "template_z8i4y63";
    const serviceId = "service_0f21nnd";
    const publicKey = "0Fx_V0nHp-H8gE-dF";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Athavale Classes",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent Successfully", response);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending email :", error);
      });
  };
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-form">
          <form className="c-form" onSubmit={handleSubmit}>
            <div className="c-form-heading">
              <h3>Get In Touch</h3>
              <p>Take the first step to Math Success</p>
            </div>
            <div className="c-form-item">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="c-form-item">
              {" "}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="c-form-item">
              <input
                type="text"
                placeholder="Phone No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="c-form-item">
              <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className="contact-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info">
          <div className="info-board">
            <div className="board-heading">
              <h3>Info</h3>
            </div>
            <div className="board details">
              <div className="item-details">
                <div className="item-icon">
                  <FaPhoneAlt className="iccon" />
                </div>
                <div className="item-content">
                  <p>
                    Office: 9420178321
                    <br />
                    Prof. Vinayak Athavale: 9423202529,
                    <br />
                    Dr. Rohini Athavale: 9423007913
                  </p>
                </div>
              </div>
              <div className="item-details">
                <div className="item-icon">
                  <IoMdMail />
                </div>
                <div className="item-content">
                  <p> admin@gamil.com</p>
                </div>
              </div>
              <div className="item-details">
                <div className="item-icon">
                  <FaRegClock />
                </div>
                <div className="item-content">
                  <p>10:30 am - 7:30 pm</p>
                </div>
              </div>
              <div className="item-details">
                <div className="item-icon">
                  <MdHomeFilled />
                </div>
                <div className="item-content">
                  <p>
                    Third and forth floor,
                    <br />
                    Soba Mansion, Near Mhatre Bridge subway,
                    <br />
                    Erandwane, Pune, India 411004
                  </p>
                </div>
              </div>
            </div>
            <div className="board-map">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

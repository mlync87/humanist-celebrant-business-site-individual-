import React from "react";
import MenuLeft from "../assets/contactImage.jpg";
import "../styles/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// use email.js to test frontend only emails

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z4yn4iy",
        "template_mpns7tl",
        form.current,
        "-KnsIQoVxZMK7XFkL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${MenuLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit" className="--btn --btn-primary">
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

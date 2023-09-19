import React from "react";
import MenuLeft from "../assets/contactImage.jpg";
import "../styles/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// recreate form submission page using html and use javascript to
// test email sending.
// conmsttruct replica of website using html and css
// finish reviewing semantic html on mimo
// reconstruct site and implement backend

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
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

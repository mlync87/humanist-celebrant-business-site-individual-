import React from "react";
import AboutImage from "../assets/Lynch-170.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> About Méla Gra celebrant services </h1>
        <p>
          My name is Maria Quinn and I love celebratrions. Which is probably why
          I've persued a career which would help me share my love of
          celebrations to make your days as magical as you've always dreamed. I
          am able to officiate at any kind of wedding all across Northern
          Ireland. The only limit is your hearts desire and, of course, the law
          lol. I'm happy to travel for destination Weddings if that is your
          wish. I love that you are considering me to be part of your special
          day, and I promise you, I will do everything in my power to make YOUR
          big day as wonderful as you've always dreamed. Please feel free to
          send any questions or enquiries you may have in my contact section. I
          look forward to hearing from you. xxx
        </p>
      </div>
    </div>
  );
}

export default About;

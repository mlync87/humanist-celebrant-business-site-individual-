import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/foto-pettine-IfjHaIoAoqE-unsplash.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div
        className="headerContainer"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <h1> Méla Gra Humanist Celebrant Services </h1>
        <p> Fully customisable services to suit all styles</p>
        <Link to="/menu">
          <button> ENQUIRE NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/foto-pettine-IfjHaIoAoqE-unsplash.jpg";
import "../styles/Home.css";
// configure new banner image
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Mela Grá Humanist Celebrant Services </h1>
        <p> Fully customisable services to suit all styles</p>
        <Link to="/menu">
          <button> ENQUIRE NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

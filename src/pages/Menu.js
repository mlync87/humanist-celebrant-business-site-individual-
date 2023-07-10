import React from "react";
import { ServicesList } from "../helpers/ServicesList";
import ServicesItem from "../components/ServicesItem";

function Menu() {
  return (
    <div className="menu">
      <h1 className="servicesTitle">Our Services</h1>
      <div className="servicesList">
        {ServicesList.map((servicesItem, key) => {
          return <ServicesItem />;
        })}
      </div>
    </div>
  );
}

export default Menu;

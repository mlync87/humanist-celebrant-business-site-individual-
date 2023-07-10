import React from "react";
import { ServicesList } from "../helpers/ServicesList";
import ServicesItem from "../components/ServicesItem";
import "../styles/Services.css";

function Services() {
  return (
    <div className="menu">
      <h1 className="servicesTitle">Our Services</h1>
      <div className="servicesList">
        {ServicesList.map((servicesItem, key) => {
          return (
            <ServicesItem
              key={key}
              image={servicesItem.image}
              name={servicesItem.name}
              price={servicesItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;

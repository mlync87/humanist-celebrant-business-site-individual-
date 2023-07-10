import React from "react";

function ServicesItem({ image, name, price }) {
  return (
    <div className="servicesItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> £{price} </p>
    </div>
  );
}

export default ServicesItem;

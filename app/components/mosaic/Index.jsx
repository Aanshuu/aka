import React from "react";
import Card from "./Card";
import { properties } from "./data";

const Mosaic = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {properties.map((property) => (
        <Card key={property.id} data={property} />
      ))}
    </div>
  );
};

export default Mosaic;

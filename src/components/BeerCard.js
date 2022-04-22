import React from "react";
import { useState } from "react";

// id: uuidv4(),
// name: "Beer 1",
// brand: "Beer Company 1",
// price: 10,
// alcoholContent: 0.1,
// pints: 124

function BeerDetail({ beer }) {
  return (
    <section>
      <ul>
        <li>{beer.name}</li>
        <li>{beer.brand}</li>
        <li>{beer.price}</li>
        <li>{beer.alcoholContent}</li>
        <li>{beer.pints}</li>
      </ul>
    </section>
  )
}

export default function BeerCard({ beer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
    >
      <h1>
        {beer.name}
      </h1>
      {isActive ? (<BeerDetail beer={beer} />) : (<></>)}
    </div>
  );
};

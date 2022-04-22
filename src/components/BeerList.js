import React from "react";

import BeerCard from "./BeerCard";

export default function BeerList({ beers }) {
  return (
    <>
      {beers.map(beer =>
        <BeerCard
          beer={beer}
          key={beer.id}
        />
      )}
    </>
  )
}

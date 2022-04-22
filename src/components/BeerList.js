import React from "react";

import BeerCard from "./BeerCard";

export default function BeerList({ beers, decrementPints }) {
  return (
    <>
      {beers.map(beer =>
        <BeerCard
          beer={beer}
          decrementPints={decrementPints}
          key={beer.id}
        />
      )}
    </>
  )
}

import React from "react";

import BeerCard from "./BeerCard";

export default function BeerList({ beers, decrementPints, onViewChange, onSetEditBeer }) {
  return (
    <>
      {beers.map(beer =>
        <BeerCard
          beer={beer}
          decrementPints={decrementPints}
          onViewChange={onViewChange}
          onSetEditBeer={onSetEditBeer}
          key={beer.id}
        />
      )}
    </>
  )
}

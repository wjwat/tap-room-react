import React from "react";
import PropTypes from 'prop-types';

import BeerCard from "./BeerCard";

function BeerList({
  beers,
  decrementPints,
  onViewChange,
  onSetEditBeer,
  onDeleteBeer
}) {
  return (
    <>
      {beers.map(beer =>
        <BeerCard
          beer={beer}
          decrementPints={decrementPints}
          onViewChange={onViewChange}
          onSetEditBeer={onSetEditBeer}
          onDeleteBeer={onDeleteBeer}
          key={beer.id}
        />
      )}
      <button
        type="button"
        onClick={() => onViewChange("new")}
      >
        Add a beer
      </button>
    </>
  )
}

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
  decrementPints: PropTypes.func,
  onViewChange: PropTypes.func,
  onSetEditBeer: PropTypes.func,
  onDeleteBeer: PropTypes.func
}

export default BeerList

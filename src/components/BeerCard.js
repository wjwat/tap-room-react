import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

function BeerDetail({
  beer,
  decrementPints,
  onViewChange,
  onSetEditBeer,
  onDeleteBeer
}) {
  const pullPint = (beer.pints > 0) ?
    <button
      type="button"
      onClick={() => decrementPints(beer)}
    >
      Give it a pull!
    </button>
    :
    <button
      type="button"
      disabled
    >
      I think you've had too many...
    </button>;

  return (
    <section>
      <ul>
        <li><b>NAME: </b>{beer.name}</li>
        <li><b>BRAND: </b>{beer.brand}</li>
        <li style={{color: "#FF851B"}}><b>PRICE: </b>{beer.price}</li>
        <li><b>ABV: </b>{beer.alcoholContent}</li>
        <li><b>PINTS IN KEG: </b>{beer.pints}</li>
      </ul>
      {pullPint}
      <button
        type="button"
        onClick={() => {
          onSetEditBeer(beer);
          onViewChange("edit")
        }}
      >
        Edit
      </button>
      <button
        type="button"
        style={{backgroundColor: "red"}}
        onClick={() => {
          onDeleteBeer(beer)
        }}
      >
        DELETE
      </button>
    </section>
  )
}

function BeerCard({
  beer,
  decrementPints,
  onViewChange,
  onSetEditBeer,
  onDeleteBeer
}) {
  const [isActive, setIsActive] = useState(false);
  let pintText = <></>;

  if (beer.pints <= 10 && beer.pints > 0) {
    pintText = <span style={{color: "blue"}}> (Almost Out!)</span>;
  } else if (beer.pints === 0) {
    pintText = <span style={{color: "red"}}> (OUT)</span>;
  }

  return (
    <>
      <fieldset>
      <legend
        onClick={() => setIsActive(!isActive)}
      >
        {!isActive ? <>+ </> : <>🍻 </>}
        {beer.name}
        {pintText}
      </legend>
      {
        isActive ? 
          (<BeerDetail
              beer={beer}
              decrementPints={decrementPints}
              onViewChange={onViewChange}
              onSetEditBeer={onSetEditBeer}
              onDeleteBeer={onDeleteBeer}
            />) :
          (<></>)
      }
      </fieldset>
    </>
  );
};

BeerDetail.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
  decrementPints: PropTypes.func,
  onViewChange: PropTypes.func,
  onSetEditBeer: PropTypes.func,
  onDeleteBeer: PropTypes.func
}

BeerCard.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
  decrementPints: PropTypes.func,
  onViewChange: PropTypes.func,
  onSetEditBeer: PropTypes.func,
  onDeleteBeer: PropTypes.func
}

export default BeerCard;

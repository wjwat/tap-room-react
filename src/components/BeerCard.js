import React from "react";
import { useState } from "react";

function BeerDetail({ beer }) {
  const pullPint = (beer.pints > 0) ?
    <button
      type="button"
      onClick={() => 1+1}
    >
      Give 'er a pull!
    </button>
    :
    <></>;

  return (
    <section>
      <ul>
        <li>{beer.name}</li>
        <li>{beer.brand}</li>
        <li>{beer.price}</li>
        <li>{beer.alcoholContent}</li>
        <li>{beer.pints}</li>
      </ul>
      {pullPint}
    </section>
  )
}

export default function BeerCard({ beer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <h1
        onClick={() => setIsActive(!isActive)}
      >
        {!isActive ? <>+</> : <>-</>}
        {beer.name}
      </h1>
      {isActive ? (<BeerDetail beer={beer} />) : (<></>)}
    </>
  );
};

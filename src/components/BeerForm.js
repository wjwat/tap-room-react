import React from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function BeerForm({ beer, onSubmitFunc, onViewChange }) {
  const editBeer = !(typeof beer === 'undefined' || beer === null);
  const buttonText = (editBeer) ? "EDIT" : "CREATE";

  const handleSubmit = (event) => {
    event.preventDefault();

    const oldBeer = (editBeer) ? {...beer} : {};

    const formBeer = {
      ...oldBeer,
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseInt(event.target.price.value),
      alcoholContent: parseFloat(event.target.alcoholContent.value),
      pints: (editBeer) ? oldBeer.pints : 124,
      id: (editBeer) ? oldBeer.id : uuidv4()
    }

    onSubmitFunc(formBeer);
    onViewChange("home");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={(editBeer) ? beer.name : ''}
          required
        />
        <label htmlFor="brand">Brand: </label>
        <input
          type="text"
          id="brand"
          name="brand"
          defaultValue={(editBeer) ? beer.brand : ''}
          required
        />
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          id="price"
          name="price"
          min="1"
          max="100"
          step="1"
          defaultValue={(editBeer) ? beer.price : ""}
          required
        />
        { /* It would be cool to make this a slide that updates the price
             as you move it around. */ }
        <label htmlFor="alcoholContent">ABV: </label>
        <input
          type="number"
          id="alcoholContent"
          name="alcoholContent"
          min="0.0"
          max="99.9"
          step="0.1"
          defaultValue={(editBeer) ? beer.alcoholContent : ""}
          required
        />
        <button>{buttonText}</button>
        <button
          type="button"
          onClick={() => onViewChange("home")}
        >
          Cancel
        </button>
      </form>
    </>
  )
}

BeerForm.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
  onViewChange: PropTypes.func,
  onSubmitFunc: PropTypes.func
}

export default BeerForm;

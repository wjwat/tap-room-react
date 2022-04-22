import React from "react";
import { v4 as uuidv4 } from 'uuid';

import BeerForm from "./BeerForm";
import BeerList from "./BeerList";

const testBeers = [
  {
    id: uuidv4(),
    name: "Beer 1",
    brand: "Beer Company 1",
    price: 10,
    alcoholContent: 0.1,
    pints: 124
  },
  {
    id: uuidv4(),
    name: "Beer 2",
    brand: "Beer Company 2",
    price: 5,
    alcoholContent: 9.9,
    pints: 124
  }
];

export default class BeerControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "home",
      beers: testBeers
    };
  }

  addBeer = (beer) => {
    this.setState((state) => ({beers: [...state.beers, ...beer]}));
  }

  updateBeer = (beer) => {
    const index = this.state.beers
      .findIndex(e => beer.id === e.id);

    // What happens if we can't find that beer? Nothing.
    if (index !== -1) {
      this.setState((state) => {
        const newBeers = [...state.beers];

        newBeers[index] = {...beer};

        return {beers: [...newBeers]};
      });
    }
  }

  decrementPints = (beer) => {
    beer.pints = (beer.pints > 0) ? beer.pints - 1 : 0;
    this.updateBeer(beer);
  }

  render() {
    let view = null;

    switch (this.state.view) {
      case "new":
        break;
      case "edit":
        view = <BeerForm />
        break;
      case "home":
      default:
        view = <BeerList
            beers={this.state.beers}
            decrementPints={this.decrementPints}
          />
        break;
    }

    return (
      <>
        {view}
      </>
    )
  }
}

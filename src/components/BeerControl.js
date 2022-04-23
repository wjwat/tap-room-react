import React from "react";
import { v4 as uuidv4 } from 'uuid';

import BeerForm from "./BeerForm";
import BeerList from "./BeerList";

const testBeers = [
  {
    id: uuidv4(),
    name: "Duff",
    brand: "Duff Beer Company",
    price: 10,
    alcoholContent: 0.1,
    pints: 11
  },
  {
    id: uuidv4(),
    name: "Fudd",
    brand: "Fudd Beer Company",
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
      editBeer: null,
      beers: testBeers
    };
  }

  addBeer = (beer) => {
    this.setState((state) => {
      return {beers: [...state.beers, {...beer}]}
    });
  }

  updateBeer = (beer) => {
    const index = this.state.beers
      .findIndex(e => beer.id === e.id);

    // What happens if we can't find that beer? Nothing.
    if (index !== -1) {
      this.setState(state => {
        const newBeers = [...state.beers];

        newBeers[index] = {...beer};

        return { beers: [...newBeers] };
      });
    }
  }

  setEditBeer = (beer) => {
    this.setState(() => ({editBeer: beer}));
  }

  deleteBeer = (beer) => {
    const index = this.state.beers
      .findIndex(e => beer.id === e.id);

    if (index !== -1) {
      this.setState(state => {
        const newBeers = [...state.beers];

        newBeers.splice(index, 1);

        // Do I need to spread my `newBeers`? Unsure.
        return { beers: [...newBeers] }
      });
    }
  }

  decrementPints = (beer) => {
    beer.pints = (beer.pints > 0) ? beer.pints - 1 : 0;
    this.updateBeer(beer);
  }

  handleViewChange = (newView) => {
    this.setState(() => ({ view: newView}))
  }

  render() {
    switch (this.state.view) {
      case "new":
      case "edit":
        return ( 
          <BeerForm
            beer={this.state.view === "edit" ? this.state.editBeer : undefined}
            onSubmitFunc={this.state.view === "edit" ? this.updateBeer : this.addBeer}
            onViewChange={this.handleViewChange}
          />
        )

      case "home":
      default:
        return (
          <BeerList
            beers={this.state.beers}
            decrementPints={this.decrementPints}
            onViewChange={this.handleViewChange}
            onSetEditBeer={this.setEditBeer}
            onDeleteBeer={this.deleteBeer}
          />
        )
    }
  }
}

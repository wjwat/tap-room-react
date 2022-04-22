import React from "react";
import { v4 as uuidv4 } from 'uuid';

import BeerList from "./BeerList";

const testBeers = [
  {
    id: uuidv4(),
    name: "Beer 1",
    brand: "Beer Company 1",
    price: 10,
    alcoholContent: 0.1
  },
  {
    id: uuidv4(),
    name: "Beer 2",
    brand: "Beer Company 2",
    price: 5,
    alcoholContent: 9.9
  }
]

export default class BeerControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };
  }

  render() {
    return (
      <>
        <BeerList beers={testBeers} />
      </>
    )
  }
}

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BeerControl from "./BeerControl";

export default function App() {
  const [isDrunk, setIsDrunk] = useState(false);

  const onHoverDrunk = (value) => {
    setIsDrunk(value);
  }

  return (
    <>
      <Header/>
      <main
        className={isDrunk ? "drunk" : ""}
      >
        <h1>Mr. Roboger's Home For The Drunk And Disorderly</h1>
        <p>Grab a seat, get hammered.</p>
        <p>(Click the name of a beer to open the details about it, and pour yourself one.)</p>
        <BeerControl />
      </main>
      <Footer
        onHoverDrunk={onHoverDrunk}
      />
    </>
  );
}

import React from "react";

const headerStyles = {
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto"
}

export default function Header() {
  return (
    <header>
      <div>
        <h1 style={headerStyles}>
          Epicodus Project Week 16
        </h1>
      </div>
    </header>
  );
}

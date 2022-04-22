import React from "react";

const headerStyle = {
  backgroundColor: "#13293D",
  color: "#FFFFFF",
  textAlign: "center",
  padding: "0.5rem 1rem"
}

const h1Style = {
  paddingTop: "1rem",
  paddingBottom: "0.5rem",
  fontSize: "2.5rem"
}

export default function Header() {
  return (
    <header
      style={headerStyle}
    >
      <h1
        style={h1Style}
      >
        Epicodus Project Week 16
      </h1>
    </header>
  );
}

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Popular from "./components/Popular";
import Venues from "./components/Venues";
import Select from "./components/Select";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Popular />
      <Select/>
      <Venues />
    </div>
  );
}

export default App;

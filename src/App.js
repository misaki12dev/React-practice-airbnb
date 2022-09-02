import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  // <Hero />
  return (
    <div>
      <Navbar />
      <Card
        img="athlete.png"
        rating="5.0"
        reviewCount={6}
        country="Japan"
        title="Life in Tokyo"
        price={136}
      />
    </div>
  );
}

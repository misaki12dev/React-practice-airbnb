import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  // <Hero />

  console.log(data);

  const cards = data.map((card) => {
    return (
      <Card
        img={card.coverImg}
        title={card.title}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        price={card.price}
      />
    );
  });

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

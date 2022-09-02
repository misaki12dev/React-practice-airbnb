import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.coverImg}
        title={card.title}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        price={card.price}
        openSpots={card.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards-list">{cards}</div>
    </div>
  );
}

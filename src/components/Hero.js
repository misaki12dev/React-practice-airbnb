import React from "react";
import HeroImg from "../images/hero.png";

export default function Hero() {
  return (
    <section>
      <img src={HeroImg} alt="Hero image" className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by
        <br />
        one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  );
}

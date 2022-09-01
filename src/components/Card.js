import React from "react";
import Athlete from "../images/athlete.png";
import Wedding from "../images/wedding.png";
import Bike from "../images/bike.png";
import Star from "../images/star.png";

export default function Card() {
  return (
    <section>
      <div className="card">
        <img src={Athlete} className="card--image" />
        <div className="card--review">
          <img src={Star} className="card--star"/>
          <span>5.0</span>
          <span className="gray">(6) ・</span>
          <span className="gray">USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><span className="bold">From $136 </span>/ person</p>
      </div>
    </section>
  );
}

import React from "react";
import "./Icons.css";
import trips from "../assets/icons/trips.png";
import flight from "../assets/icons/flight.png";
import stays from "../assets/icons/stays.png";
import { icons } from "../assets/icons";

const images = [trips, flight, stays];

export default function Icons() {
  return (
    <div className="icons">
      <div className="img-box">
        <img className="icons-img" src={trips} />
        <p className="img-label">Trips</p>
      </div>

      <div className="img-box">
        <img className="icons-img" src={flight} />
        <p className="img-label">Flights</p>
      </div>

      <div className="img-box">
        <img className="icons-img" src={stays} />
        <p className="img-label">Stays</p>
      </div>
    </div>
  );
}

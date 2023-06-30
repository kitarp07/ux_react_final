import React, { useState } from "react";
import "./Icons.css";
import trips from "../assets/icons/trips.png";
import flight from "../assets/icons/flight.png";
import stays from "../assets/icons/stays.png";
import { icons } from "../assets/icons";

const images = [trips, flight, stays];

export default function Icons() {
  const [selectedFilter, setSelectedFilter] = useState();
  return (
    <div className="icons">
      <div
        key={1}
        className={`img-box ${1 == selectedFilter && "selected-box"}`}
        onClick={() => {
          setSelectedFilter(1);
        }}
      >
        <img className="icons-img" src={trips} />
        <p className={`img-label ${1 == selectedFilter && "selected-label"}`}>Trips</p>
      </div>

      <div
        key={2}
        className={`img-box ${2 == selectedFilter && "selected-box"}`}
        onClick={() => {
          setSelectedFilter(2);
        }}
      >
        <img className="icons-img" src={flight} />
        <p className={`img-label ${2 == selectedFilter && "selected-label"}`}>Flights</p>
      </div>

      <div
        key={3}
        className={`img-box ${3 == selectedFilter && "selected-box"}`}
        onClick={() => {
          setSelectedFilter(3);
        }}
      >
        <img className="icons-img" src={stays} />
        <p className={`img-label ${3 == selectedFilter && "selected-label"}`}>Stays</p>
      </div>
    </div>
  );
}

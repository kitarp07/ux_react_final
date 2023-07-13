import React, { useEffect, useState } from "react";
import "./Cards.css";
import Card from "./Card";
import tripServices from "../services/tripServices";
function Cards() {
  const [tripData, setTripData] = useState([]);

  useEffect(() => {
    tripServices
      .getTrips()
      .then((res) => {
        console.log(res.data);
        setTripData(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="cards-flex">
      {tripData.map((trip) => (
        <Card trip={trip} />
      ))}
    </div>
  );
}

export default Cards;

import React, { useEffect, useState } from "react";
import "./Cards.css";
import Card from "./Card";
import AccommodationCard from "./AccommodationCard";
import FlightCard from "./FlightCard";
import tripServices from "../services/tripServices";
import accommodationServices from "../services/accommodationServices";
import flightsServices from "../services/flightsServices";

function Cards({ selectedFilter }) {
  const [tripData, setTripData] = useState([]);
  console.log(selectedFilter);

  useEffect(() => {
    if (selectedFilter == 1) {
      tripServices
        .getTrips()
        .then((res) => {
          console.log(res.data);
          setTripData(res.data);
        })
        .catch((err) => console.log(err));
    } else if (selectedFilter == 2) {
      flightsServices.getFlights().then((res) => {
        console.log(res.data);
        setTripData(res.data);
      });
    }
    else if (selectedFilter == 3) {
      accommodationServices.getStays().then((res) => {
        console.log(res.data);
        setTripData(res.data);
      });
    }


  }, [selectedFilter]);
  return (
    <div className="cards-flex">
      {tripData.map((trip) => {
        if (selectedFilter === 1) {
          return <Card trip={trip} />;
        } else if (selectedFilter === 3) {
          return <AccommodationCard trip={trip} />;
        } else if (selectedFilter === 2) {
          return <FlightCard trip={trip} />;
        } else {
          return <Card trip={trip} />;
        }
      })}
    </div>
  );
}

export default Cards;

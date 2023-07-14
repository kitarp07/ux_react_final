import React, { useEffect, useState } from "react";
import "./Cards.css";
import Card from "./Card";
import AccommodationCard from "./AccommodationCard";
import FlightCard from "./FlightCard";
import tripServices from "../services/tripServices";
import accommodationServices from "../services/accommodationServices";
import flightsServices from "../services/flightsServices";
import moment from "moment";
import { Button, message } from "antd";

function Cards({ selectedFilter, searchItem, searchDate, setSearchItem, setSearchDate }) {
  const [tripData, setTripData] = useState([]);
  console.log(selectedFilter);
  // console.log("selectedFilter", searchItem, searchDate);

  const formattedSD = moment(searchDate).format("YYYY/MM/DD");
 

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content:
        "This is a prompt message for success, and it will disappear in 10 seconds",
      duration: 10,
    });
  };

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
    } else if (selectedFilter == 3) {
      accommodationServices.getStays().then((res) => {
        console.log(res.data);
        setTripData(res.data);
      });
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedFilter == 1) {
      if (searchDate.length > 0 && searchItem.length > 0) {
        console.log("selectedFilter", searchItem, searchDate);
        tripServices
          .getTrips()
          .then((res) => {
            console.log(res.data);
            const filteredData = res.data.filter((trip) => {
              return (
                trip.startDate === formattedSD &&
                trip.title.toLowerCase().includes(searchItem.toLowerCase())
              );
            });

            if (filteredData.length > 0) {
              setTripData(filteredData);
            } else {
              message.success(`There are no trips related to ${searchItem}`)
            }

            setSearchItem("")
            setSearchDate("")
          })
          .catch((err) => console.log(err));
      } else if (searchDate.length == 0 && searchItem.length > 0) {
        tripServices
          .getTrips()
          .then((res) => {
            console.log(res.data);
            const filteredData = res.data.filter((trip) => {
              return trip.title
                .toLowerCase()
                .includes(searchItem.toLowerCase());
            });
            if (filteredData.length > 0) {
              setTripData(filteredData);
            } else {
              message.success(`There are no trips related to ${searchItem}`)
            }
            setSearchItem("")
            setSearchDate("")
          })
          .catch((err) => console.log(err));
      } else if (searchDate.length == 0 && searchItem.length == 0) {
        tripServices
          .getTrips()
          .then((res) => {
            console.log(res.data);
            setTripData(res.data);
          })
          .catch((err) => console.log(err));
      }
    } else if (selectedFilter == 2) {
      if (searchDate.length > 0 && searchItem.length > 0) {
        console.log("selectedFilter", searchItem, searchDate);
        flightsServices
          .getFlights()
          .then((res) => {
            console.log(res.data);
            const filteredData = res.data.filter((flight) => {
              return (
                flight.departure_date === formattedSD &&
                flight.destination
                  .toLowerCase()
                  .includes(searchItem.toLowerCase())
              );
            });
            if (filteredData.length > 0) {
              setTripData(filteredData);
            } else {
              message.success(`There are no flights related to ${searchItem}`)
            }
            setSearchItem("")
            setSearchDate("")
          })
          .catch((err) => console.log(err));
      } else if (searchDate.length == 0 && searchItem.length > 0) {
        console.log("selectedFilter", searchItem, searchDate);
        flightsServices
          .getFlights()
          .then((res) => {
            console.log(res.data);
            const filteredData = res.data.filter((flight) => {
              return flight.destination
                .toLowerCase()
                .includes(searchItem.toLowerCase());
            });
            if (filteredData.length > 0) {
              setTripData(filteredData);
            } else {
              message.success(`There are no flights related to ${searchItem}`)
            }
            setSearchItem("")
            setSearchDate("")
          })
          .catch((err) => console.log(err));
      } else if (searchDate.length == 0 && searchItem.length == 0) {
        flightsServices
          .getFlights()
          .then((res) => {
            console.log(res.data);
            setTripData(res.data);
          })
          .catch((err) => console.log(err));
      }
    } else if (selectedFilter == 3) {
      if (searchDate.length > 0 && searchItem.length > 0) {
        console.log("selectedFilter", searchItem, searchDate);
        accommodationServices
          .getStays()
          .then((res) => {
            const filteredData = res.data.filter((trip) => {
              return (
                trip.checkInDate === formattedSD &&
                trip.name.toLowerCase().includes(searchItem.toLowerCase())
              );
            });
            if (filteredData.length > 0) {
              setTripData(filteredData);
            } else {
              message.success(`There are no stays related to ${searchItem}`)
            }
          })
          .catch((err) => console.log(err));
      } else if (searchDate.length === 0 && searchItem.length > 0) {
        console.log("selectedFilter", searchItem, searchDate);
        accommodationServices
          .getStays()
          .then((res) => {
            const filteredData = res.data.filter((trip) => {
              return trip.name.toLowerCase().includes(searchItem.toLowerCase());
            });
            if (filteredData.length > 0) {
              setTripData(filteredData);
            } else {
              message.success(`There are no stays related to ${searchItem}`)
            }
            setSearchItem("")
            setSearchDate("")
          })
          .catch((err) => console.log(err));
      } else {
        console.log("stays", searchItem, searchDate);
        console.log("as");
        accommodationServices.getStays().then((res) => {
          console.log(res.data);
          setTripData(res.data);
        });
      }
    }
  }, [searchDate, searchItem, selectedFilter]);
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

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./FlightDetail.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Button as ReactStrapButton,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import tripServices from "../services/tripServices";
import flightsServices from "../services/flightsServices";
export default function FlightDetail() {
  const navigate = useNavigate();
  const { id } = useParams();


  console.log('productId:', id);


  const [trip, setTrip] = useState([]);

  const [isTrip, setIsTrip] = useState(false)


  useEffect(()=> {

    flightsServices.getFlightById(id).then((res)=>{
      console.log(res.data)
      setTrip(res.data)
      
    }).catch((err)=> console.log(err))
  }, [id])

  
  

  console.log(trip)
  console.log(trip.img)

  const price =trip?.no_of_passengers * trip?.price

  

  
  const baseUrl = "http://localhost:3001";

  const imagess = trip.img
  
  
  
 



  return (
    <div>
      <Navbar />

      <div className="trip-div">
        <div className="tripWrap">
          <div className="trip-title">
            <p className="title">Flight Details</p>
          </div>
          <div className="title-details">
            <StarRateRoundedIcon />
            <p className="rating-num">4.0</p>

            <p className="details">{trip?.airline}</p>
          </div>
        </div>

        {}

        <div className="trip-images">

        {trip && Array.isArray(trip.img) && trip.img.length > 0  ? (
        <><div>
              <img
                className="trip-img"
                src={`${baseUrl}/${trip.img[0]}`}
                alt="" />
            </div><div className="img-grid">
                <img
                  className="grid-img"
                  src={`${baseUrl}/${trip.img[1]}`} />
                <img
                  className="grid-img"
                  src={`${baseUrl}/${trip.img[2]}`} />
                <img
                  className="grid-img"
                  src={`${baseUrl}/${trip.img[3]}`} />
                <img
                  className="grid-img"
                  src={`${baseUrl}/${trip.img[4]}`} />
              </div></>
      ) : (
        <p>No images available.</p>
      )}
         
        </div>

        <div className="below-details">
          <div className="trip-info">
            <div className="info-1">
              <p className="info-1-title">Paris</p>
            </div>
            {/* <div className="info-2">
              <p className="info-2-d1">3 guests</p>
              <p className="info-2-d">3 beds</p>
              <p className="info-2-d">1 bath</p>
            </div> */}
            <div className="about">
              <p className="about-title">About this trip</p>
              <p className="about-info">
               {trip?.origin} to {trip?.destination} flight hosted by {trip?.airline}.
              </p>
            </div>
            <div className="offers">
              <p className="offers-title">Info</p>
              <div className="offer-div">
                <div className="dep-div">
                    <div className="dep-icon">
                        <p>Departure Time :    </p>

                    </div>
                    <div className="dep-c">
                        <p> {trip?.departure_date}, {trip?.departure_time}</p>

                    </div>

                </div>
                <div className="dep-div">
                    <div className="dep-icon">
                        <p>Arrival Time :    </p>

                    </div>
                    <div className="dep-c">
                        <p> {trip?.arrival_date}, {trip?.arrival_time}</p>

                    </div>

                </div>

                <div className="dep-div">
                    <div className="dep-icon">
                        <p>Baggage Limit :    </p>

                    </div>
                    <div className="dep-c">
                        <p> {trip?.baggage_limit}</p>

                    </div>

                </div>
                <div className="dep-div">
                    <div className="dep-icon">
                        <p>Carry Baggage Limit :    </p>

                    </div>
                    <div className="dep-c">
                        <p> {trip?.baggage_carry_limit}</p>

                    </div>

                </div>
                <div className="dep-div">
                    <div className="dep-icon">
                        <p>Flight Duration :    </p>

                    </div>
                    <div className="dep-c">
                        <p> {trip?.flightDuration}</p>

                    </div>

                </div>

             
               
                
              </div>
            </div>
          
          </div>

          <div className="book-card">
            <div className="book-card-title">
              <p className="b-title">Book this flight</p>
            </div>
            <div className="booking-dates">
              <div className="check-in">
                <p className="ci"> Check in</p>
                <p className="ci2">Add Date</p>
              </div>
              <div className="check-out">
                <p p className="co">
                  {" "}
                  Check out
                </p>
                <p className="co2">Add Date</p>
              </div>
            </div>

            <div className="guests-div">
              <div className="num">
                <div className="cg">
                  <p className="g1"> Guests</p>
                  <p className="g2">Add guests</p>
                </div>
                <KeyboardArrowDownIcon className="down-icon" />
              </div>
            </div>

            <div className="price-div">
              <div className="guests-price">
                <p>{trip?.no_of_passengers} passengers x Nrs {trip?.price}</p>
              </div>

              <div className="price">
                <p>Nrs {trip?.price}</p>
              </div>
            </div>

            <div className="total-price">
              <div className="tp1">
                <p>Total price</p>
              </div>

              <div className="tp2">
                <p>Nrs {price}</p>
              </div>
            </div>

            <div
              onClick={() => {
                navigate(`/checkout/flight/${id}`);
              }}
              className="book-button"
            >
              <ReactStrapButton className="b">Book Now</ReactStrapButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

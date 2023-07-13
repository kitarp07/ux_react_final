import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./TripDetail.css";
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
import accommodationServices from "../services/accommodationServices";
export default function StayDetail() {
  const navigate = useNavigate();
  const { id } = useParams();


  console.log('productId:', id);


  const [trip, setTrip] = useState([]);

  const [isTrip, setIsTrip] = useState(false)


  useEffect(()=> {

    accommodationServices.getStayById(id).then((res)=>{
      console.log(res.data)
      setTrip(res.data)
      
    }).catch((err)=> console.log(err))
  }, [id])

  

  
  const baseUrl = "http://localhost:3001";


  return (
    <div>
      <Navbar />

      <div className="trip-div">
        <div className="tripWrap">
          <div className="trip-title">
            <p className="title">{trip?.name}</p>
          </div>
          <div className="title-details">
            <StarRateRoundedIcon />
            <p className="rating-num">5.0</p>

            <p className="details">{trip?.location}</p>
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
              <p className="info-1-title">Entire villa</p>
            </div>
            <div className="info-2">
              <p className="info-2-d1">3 guests</p>
              <p className="info-2-d">3 beds</p>
              <p className="info-2-d">1 bath</p>
            </div>
            <div className="about">
              <p className="about-title">About this trip</p>
              <p className="about-info">
               {trip?.description}
              </p>
            </div>
            <div className="offers">
              <p className="offers-title">Offers</p>
              <div className="offer-div">
                <p className="offer">Mountain views</p>
                <p className="offer">3 day trek through forests and rivers</p>
                <p className="offer">Camping</p>
              </div>
            </div>
            <div className="itinerary">
              <p className="itinerary-title">Info</p>
              <p className="itinerary-info">
                  {trip?.info}
               
              </p>
            </div>
          </div>

          <div className="book-card">
            <div className="book-card-title">
              <p className="b-title">Book this Trip</p>
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
                <p>{trip?.numberOfGuests} guests</p>
              </div>

              <div className="price">
                <p>{trip?.price} Nrs</p>
              </div>
            </div>

            <div className="total-price">
              <div className="tp1">
                <p>Total price</p>
              </div>

              <div className="tp2">
                <p>{trip?.price} Nrs</p>
              </div>
            </div>

            <div
              onClick={() => {
                navigate(`/checkout/stays/${id}`);
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

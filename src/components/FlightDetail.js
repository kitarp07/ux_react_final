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

import checkoutServices from "../services/checkoutServices";
import { DatePicker, Space } from "antd";
export default function FlightDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log("productId:", id);

  const [trip, setTrip] = useState([]);

  const [isTrip, setIsTrip] = useState(false);

  const [checkInDate, setCheckInDate] = useState('2023-07-20');
  const [checkOutDate, setCheckOutDate] = useState('2023-07-25');

  const [numP, setNumP] = useState(3);

  const onChange_in = (date, dateString) => {
    console.log(date, dateString);
   
    setCheckInDate(dateString);
  };

  const onChange_out = (date, dateString) => {
    console.log(date, dateString);
   
    setCheckOutDate(dateString);
  };



  useEffect(() => {
    flightsServices
      .getFlightById(id)
      .then((res) => {
        console.log(res.data);
        setTrip(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(trip);
  console.log(trip.img);

  const price = trip?.no_of_passengers * trip?.price;

  const baseUrl = "http://localhost:3001";

  const imagess = trip.img;


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
          {trip && Array.isArray(trip.img) && trip.img.length > 0 ? (
            <>
              <div>
                <img
                  className="trip-img"
                  src={`${baseUrl}/${trip.img[0]}`}
                  alt=""
                />
              </div>
              <div className="img-grid">
                <img className="grid-img" src={`${baseUrl}/${trip.img[1]}`} />
                <img className="grid-img" src={`${baseUrl}/${trip.img[2]}`} />
                <img className="grid-img" src={`${baseUrl}/${trip.img[3]}`} />
                <img className="grid-img" src={`${baseUrl}/${trip.img[4]}`} />
              </div>
            </>
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
                {trip?.origin} to {trip?.destination} flight hosted by{" "}
                {trip?.airline}.
              </p>
            </div>
            <div className="offers">
              <p className="offers-title">Info</p>
              <div className="offer-div">
                <div className="dep-div">
                  <div className="dep-icon">
                    <p>Departure Time : </p>
                  </div>
                  <div className="dep-c">
                    <p>
                      {" "}
                      {trip?.departure_date}, {trip?.departure_time}
                    </p>
                  </div>
                </div>
                <div className="dep-div">
                  <div className="dep-icon">
                    <p>Arrival Time : </p>
                  </div>
                  <div className="dep-c">
                    <p>
                      {" "}
                      {trip?.arrival_date}, {trip?.arrival_time}
                    </p>
                  </div>
                </div>

                <div className="dep-div">
                  <div className="dep-icon">
                    <p>Baggage Limit : </p>
                  </div>
                  <div className="dep-c">
                    <p> {trip?.baggage_limit}</p>
                  </div>
                </div>
                <div className="dep-div">
                  <div className="dep-icon">
                    <p>Carry Baggage Limit : </p>
                  </div>
                  <div className="dep-c">
                    <p> {trip?.baggage_carry_limit}</p>
                  </div>
                </div>
                <div className="dep-div">
                  <div className="dep-icon">
                    <p>Flight Duration : </p>
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
                <div className="ci"> Start</div>
                <div className="ci2">
                  <Space direction="vertical">
                    <DatePicker className="date-pik-fb" onChange={onChange_in} />
                  </Space>
                </div>
              </div>
              <div className="check-out">
                <div p className="ci">
                  {" "}
                  End
                </div>
                <div className="ci2">
                  <Space direction="vertical" >
                    <DatePicker className="date-pik-fb" onChange={onChange_out} />
                  </Space>
                </div>
              </div>
            </div>

            <div className="guests-div">
              <div className="num">
                <div className="cg">
                  <div className="g1"> Guests</div>
                  <div className="g2">
                    <FormGroup>
                      <Input
                      id="numG"
                      className="f-numg"
                      name="num_of_guests"
                      type="text"
                      placeholder="Enter number of passengers"
                      onChange={(e) => setNumP(e.target.value)}

                      />
                    </FormGroup>
                  </div>
                </div>
          
              </div>
            </div>

            <div className="price-div">
              <div className="guests-price">
                <p>
                  {numP} passengers x Nrs {trip?.price}
                </p>
              </div>

              <div className="price">
                <p>Nrs {trip?.price * numP}</p>
              </div>
            </div>

            <div className="total-price">
              <div className="tp1">
                <p>Total price</p>
              </div>

              <div className="tp2">
                <p>Nrs {trip?.price * numP}</p>
              </div>
            </div>

            <div
              onClick={() => {
                navigate(`/checkout/flight/${id}/${numP}/${checkInDate}/${checkOutDate}`);
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

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
import { DatePicker, Space } from "antd";

import tripServices from "../services/tripServices";
export default function TripDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [startDate, setStartDate] = useState("2023-07-20");
  const [endDate, setEndDate] = useState("2023-07-25");

  const [numP, setNumP] = useState(3);

  console.log("productId:", id);

  const onChange_s = (date, dateString) => {
    console.log(date, dateString);

    setStartDate(dateString);
  };

  const onChange_e = (date, dateString) => {
    console.log(date, dateString);

    setEndDate(dateString);
  };

  const [trip, setTrip] = useState([]);

  const [isTrip, setIsTrip] = useState(false);

  useEffect(() => {
    tripServices
      .getTripById(id)
      .then((res) => {
        console.log(res.data);
        setTrip(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(trip);
  console.log(trip.img);

  const baseUrl = "http://localhost:3001";

  const imagess = trip.img;

  return (
    <div>
      <Navbar />

      <div className="trip-div">
        <div className="tripWrap">
          <div className="trip-title">
            <p className="title">{trip?.title}</p>
          </div>
          <div className="title-details">
            <StarRateRoundedIcon />
            <p className="rating-num">5.0</p>

            <p className="details">{trip?.destination}</p>
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
              <p className="info-1-title">Entire villa</p>
            </div>
            <div className="info-2">
              <p className="info-2-d1">3 guests</p>
              <p className="info-2-d">3 beds</p>
              <p className="info-2-d">1 bath</p>
            </div>
            <div className="about">
              <p className="about-title">About this trip</p>
              <p className="about-info">{trip?.description}</p>
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
              <p className="itinerary-title">Itinerary</p>
              <p className="itinerary-info">
                {trip?.itinerary}
                <br />
                On arrival, we will explain the menu we provide and you can
                choose your own menu for cooking in each category. After that,
                you will learn about Thai herbs and vegetables in our organic
                kitchen garden, and following by cooking activities. You will
                learn basic Thai cooking in 5 categories; Curry Paste, Curry,
                Stir-Fried, Soup, and Spring Roll.
                <br />
                Every menu is able to cook as vegetarian or vegan. You can
                decide to make your food spicy or mild. Next, you will enjoy
                yummy Thai food you cook yourself in our relaxing atmosphere.
                Finally, we will take you back to your hotel/accommodation in
                Chiang Mai city.
              </p>
            </div>
          </div>

          <div className="book-card">
            <div className="book-card-title">
              <p className="b-title">Book this Trip</p>
            </div>
            <div className="booking-dates">
              <div className="check-in">
                <div className="ci"> Start</div>
                <div className="ci2">
                  <Space direction="vertical">
                    <DatePicker className="date-pik-tb" onChange={onChange_s} />
                  </Space>
                </div>
              </div>
              <div className="check-out">
                <p p className="ci">
                  {" "}
                  End
                </p>
                <p className="ci2">
                  {" "}
                  <Space direction="vertical">
                    <DatePicker className="date-pik-tb" onChange={onChange_e} />
                  </Space>
                </p>
              </div>
            </div>

            <div className="guests-div">
              <div className="num">
                <div className="cg">
                  <div className="g1"> Guests</div>
                  <div className="g2">
                    <FormGroup>
                      <Input
                        id="numOfpeople"
                        className="t-numg"
                        name="num_of_trippers"
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
                <p>{numP} guests x {trip?.price}$</p>
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
                navigate(`/checkout/trip/${id}/${numP}/${startDate}/${endDate}`);
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

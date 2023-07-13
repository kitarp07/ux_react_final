import React, { useEffect } from "react";
import "./FlightCard.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Button as ReactStrapButton,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Modal } from "react-bootstrap";

import airplane from "../assets/icons/airplane.png";
import ft from "../assets/icons/ft.png";
function FlightCard({ trip }) {
  const navigate = useNavigate();

  const [ departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  useEffect(() => {
    if (trip && trip.departure_date) {
      const startDate = trip.departure_date;
      const [year, month, day] = startDate.split("/");
      // Create a new Date object using the extracted values
      const date = new Date(year, month - 1, day);
      // Format the date to display only month and day
      const formattedDate = date.toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
      });

      setDepartureDate(formattedDate);
    }

    if (trip && trip.arrival_date) {
      const endDate = trip.arrival_date;
      const [year2, month2, day2] = endDate.split("/");

      // Create a new Date object using the extracted values
      const date2 = new Date(year2, month2 - 1, day2);

      // Format the date to display only month and day
      const formattedDate2 = date2.toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
      });

      setArrivalDate(formattedDate2);
    }
  });

  const imagess = trip.img;

  const baseUrl = "http://localhost:3001";

  const id = trip._id;

  return (
    <div className="flight-card">
      <Form>
        <div className="fc-back">
          <div className="fc-below-bar">
            <div className="below-content">
              <div className="fc-b-content">
                <div className="a-i-div">
                  <div className="fc-flight-img">
                    <img className="fc-flight-icon" src={airplane} />
                  </div>
                  <div className="fc-airline">
                    <div className="dc-a">
                      <p className="fc-a-name">{trip?.airline}</p>
                    </div>
                  </div>
                </div>

                <div className="from-to-div-r">
                  <div className="from-div-r">
                    <div className="fc-o">
                      <p className="fc-o-p">{trip?.origin}</p>
                    </div>
                  </div>

                  <div className="to-div-r">
                    <div className="fc-dd">
                      <p className="fc-dd-d"> {departureDate}, {trip?.departure_time}</p>
                    </div>
                  </div>
                </div>
                <div className="line"></div>

                <div className="fc-dates-r">
                  <div className="fcd-r">
                    <div className="fc-o">
                      <p className="fc-o-p">{trip?.destination}</p>
                    </div>
                  </div>
                  <div className="fcd-r">
                    <div className="fc-dd">
                      <p className="fc-dd-d"> {arrivalDate}, {trip?.arrival_time}</p>
                    </div>
                  </div>
                </div>
                <div className="fc-price">
                  <div className="fc-p">
                    <p className="fc-p-c">Nrs {trip?.price}</p>
                  </div>
                </div>
                <div className="fc-view-btn">
                  <div className="fc-btn-div">
                    <ReactStrapButton onClick={()=> {navigate(`/flight-detail/${trip._id}`)}}>View</ReactStrapButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default FlightCard;

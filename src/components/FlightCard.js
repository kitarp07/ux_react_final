import React from "react";
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

  const departureDateTime = new Date(trip.departure_time);
  const formattedDepartureDate = departureDateTime.toLocaleString(undefined, {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const arrivalDateTime = new Date(trip.arrival_time);
  const formattedArrivalDate = arrivalDateTime.toLocaleString(undefined, {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const imagess = trip.img;

  const baseUrl = "http://localhost:3001";

  const id = trip._id;

  return (
    <div className="flight-card">
      <Form>
        <div className="fc-back">
          <div className="fc-topbar">
            <div className="from-to-div">
              <div className="from-div">
                <FormGroup>
                  <Input
                    className="origin-input"
                    id="origin"
                    name="origin"
                    placeholder="From"
                    type="text"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)
                    // }
                  />
                </FormGroup>
              </div>

              <div className="icon-div">
                <img
                  className="flight-icon"
                  src="https://ak-s.tripcdn.com/modules/ibu/flight-online-web/modules/ic_change_plane.b2a7435e40.png"
                />
              </div>
              <div className="to-div">
                <FormGroup>
                  <Input
                    className="destination-input"
                    id="destination"
                    name="destination"
                    placeholder="Destination"
                    type="text"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)
                    // }
                  />
                </FormGroup>
              </div>
            </div>

            <div className="fc-dates">
              <div className="fcd">
                {" "}
                <FormGroup>
                  <Input
                    className="destination-input"
                    id="destination"
                    name="destination"
                    placeholder="Departure"
                    type="text"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)
                    // }
                  />
                </FormGroup>
              </div>
              <div className="fcd">
                {" "}
                <FormGroup>
                  <Input
                    className="destination-input"
                    id="destination"
                    name="destination"
                    placeholder="Arrival"
                    type="text"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)
                    // }
                  />
                </FormGroup>
              </div>
            </div>
            <div className="fc-search">
              <div className="serach-btn-fc-div">
                <div className="fc-search-btn">
                  <ReactStrapButton className="fc-search">
                    {" "}
                    search{" "}
                  </ReactStrapButton>
                </div>
              </div>
            </div>
          </div>

          <div className="fc-below-bar">
            <div className="below-content">
              <div className="fc-b-content">
                <div className="a-i-div">
                  <div className="fc-flight-img">
                    <img className="fc-flight-icon" src={airplane} />
                  </div>
                  <div className="fc-airline">
                    <div className="dc-a">
                      <p className="fc-a-name">Buddha Airlines</p>
                    </div>
                  </div>
                </div>

                <div className="from-to-div-r">
                  <div className="from-div-r">
                    <div className="fc-o">
                      <p className="fc-o-p">Kathmandu</p>
                    </div>
                  </div>

                  <div className="to-div-r">
                    <div className="fc-dd">
                      <p className="fc-dd-d"> Departure Date</p>
                    </div>
                  </div>
                </div>
                <div className="line"></div>

                <div className="fc-dates-r">
                  <div className="fcd-r">
                    <div className="fc-o">
                      <p className="fc-o-p">Pokhara</p>
                    </div>
                  </div>
                  <div className="fcd-r">
                    <div className="fc-dd">
                      <p className="fc-dd-d"> Departure Date</p>
                    </div>
                  </div>
                </div>
                <div className="fc-price">
                  <div className="fc-p">
                    <p className="fc-p-c">Price</p>
                  </div>
                </div>
                <div className="fc-view-btn">
                  <div className="fc-btn-div">
                    <ReactStrapButton>View</ReactStrapButton>
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

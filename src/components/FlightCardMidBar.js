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
function FlightCardMidBar({ trip }) {
  const navigate = useNavigate();

  

  return (
    <div className="flight-card">
      <Form>
        <div className="fc-back-mb">
          <div className="fc-below-bar-mb">
            <div className="below-content">
              <div className="fc-b-content-mb">
                <div className="a-i-div">
                  <div className="fc-flight-img">
                   
                  </div>
                  <div className="fc-airline">
                    <div className="dc-a">
                      <p className="fc-a-name">Airlines</p>
                    </div>
                  </div>
                </div>

                <div className="from-to-div-r-mb">
                  <div className="from-div-r">
                    <div className="fc-o">
                      <p className="fc-o-p">Departure</p>
                    </div>
                  </div>

                  <div className="to-div-r">
                    <div className="fc-dd">
                      <p className="fc-dd-d"> </p>
                    </div>
                  </div>
                </div>
                <div className="line-mb"></div>

                <div className="fc-dates-r-mb">
                  <div className="fcd-r">
                    <div className="fc-o">
                      <p className="fc-o-p">Arrival</p>
                    </div>
                  </div>
                  <div className="fcd-r">
                    <div className="fc-dd">
                      <p className="fc-dd-d"> </p>
                    </div>
                  </div>
                </div>
                <div className="fc-price-mb">
                  <div className="fc-p">
                    <p className="fc-p-c">Price</p>
                  </div>
                </div>
                <div className="fc-view-btn">
                  <div className="fc-btn-div-mb">
                    <ReactStrapButton className="fc-search">View</ReactStrapButton>
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

export default FlightCardMidBar;

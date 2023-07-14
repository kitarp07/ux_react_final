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

import { DatePicker, Space } from "antd";
function FlightCardTopBar() {

  const [destination, setDestination] = useState('')
  const [departure, setDeparture] = useState('')
  const [arrival, setArrival] = useState('')

  return (
    <div className="flight-card">
      <Form>
        <div className="fc-back-t">
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
                    Search{" "}
                  </ReactStrapButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default FlightCardTopBar;

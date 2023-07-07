import React from "react";
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
export default function TripDetail() {
  return (
    <div>
      <Navbar />

      <div className="trip-div">
        <div className="tripWrap">
          <div className="trip-title">
            <p className="title">Cheomdangwahak-ro</p>
          </div>
          <div className="title-details">
            <StarRateRoundedIcon />
            <p className="rating-num">5.0</p>

            <p className="details">Location</p>
          </div>
        </div>

        <div className="trip-images">
          <div>
            <img
              className="trip-img"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/dd6e35a7-eeaa-4144-8c66-b05936ba1c77.jpeg?im_w=720"
            />
          </div>
          <div className="img-grid">
            <img
              className="grid-img"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/dd6e35a7-eeaa-4144-8c66-b05936ba1c77.jpeg?im_w=720"
            />
            <img
              className="grid-img"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/dd6e35a7-eeaa-4144-8c66-b05936ba1c77.jpeg?im_w=720"
            />
            <img
              className="grid-img"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/dd6e35a7-eeaa-4144-8c66-b05936ba1c77.jpeg?im_w=720"
            />
            <img
              className="grid-img"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/dd6e35a7-eeaa-4144-8c66-b05936ba1c77.jpeg?im_w=720"
            />
          </div>
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
              <p className="about-title">About this space</p>
              <p className="about-info">
                A house in the heart of the Himalayas, away from the hustle of
                the city. Enjoy a serene view of the valley surrounded by plum,
                apple, persimmon and other trees. A peaceful location which is
                perfect for a relaxing vacation or work-ation. Wake up to an
                amazing view of the mountains, enjoy a relaxing day reading a
                book in the balcony, or explore the many nearby sites and
                adventure activities; This location offers something for
                everyone.
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
              <p className="itinerary-title">Itinerary</p>
              <p className="itinerary-info">
                We will pick you up at your hotel/accommodation in Chiang Mai
                city, and take you to a local market for a brief visit before
                continuing to drive to Smile Organic Farm Cooking School.
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
                <p>3 guests x 20$</p>
              </div>

              <div className="price">
                <p>60$</p>
              </div>
            </div>

            <div className="total-price">
              <div className="tp1">
                <p>Total price</p>
              </div>

              <div className="tp2">
                <p>60$</p>
              </div>
            </div>

            <div className="book-button">
            <ReactStrapButton className="b" color="primary">
                Book Now
              </ReactStrapButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

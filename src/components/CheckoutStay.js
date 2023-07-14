import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Checkout.css";
import {
  Button as ReactStrapButton,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import KhaltiCheckout from "khalti-checkout-web";
import config from "./Khalti/khaltiConfig";
import { useNavigate, useParams } from "react-router-dom";
import tripServices from "../services/tripServices";
import accommodationServices from "../services/accommodationServices";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import checkoutServices from "../services/checkoutServices";

export default function CheckoutStay() {
  const [street_address, setStreetAddress] = useState("");
  const [apartment_number, setApartmentNumber] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  let checkout = new KhaltiCheckout(config);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const { numP } = useParams();
  const { startDate } = useParams();
  const { endDate } = useParams();

  const formatted_1 = moment(startDate).format("YYYY/MM/DD");
  const formatted_2 = moment(endDate).format("YYYY/MM/DD");

  console.log("productId:", id);

  const [trip, setTrip] = useState([]);
  useEffect(() => {
    accommodationServices
      .getStayById(id)
      .then((res) => {
        console.log(res.data);
        setTrip(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const baseUrl = "http://localhost:3001";

  const imagess = trip.img;

  const [formattedDate, setFormattedDate] = useState("");
  const [formattedDate2, setFormattedDate2] = useState("");
  const [differenceInDays, setDifferenceInDays] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (trip && trip.checkInDate) {
      const startDate = formatted_1;
      const [year, month, day] = startDate.split("/");
      const date = new Date(year, month - 1, day);
      const fd1 = date.toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
      });

      setFormattedDate(fd1);
    }

    if (trip && trip.checkOutDate) {
      const endDate = formatted_2;
      const [year2, month2, day2] = endDate.split("/");
      const date2 = new Date(year2, month2 - 1, day2);
      const fd2 = date2.toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
      });

      setFormattedDate2(fd2);

      const differenceInMs = date2 - new Date(formattedDate);
      const calculatedDifferenceInDays = Math.floor(
        differenceInMs / (1000 * 60 * 60 * 24)
      );
      setDifferenceInDays(calculatedDifferenceInDays);
    }

    if (trip & trip.price) {
      const val = trip.price;

      const p = 1000 * price;
      setPrice(p);
    }
  }, [trip]);

  const [newNumP, setNewNumP] = useState(numP);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = window.localStorage.getItem("uid");
    const stay = id;
    const numTravelers = newNumP;
    const trip_type = "Stay";

    checkoutServices
      .createCheckout({
        user,
        stay,
        numTravelers,
        apartment_number,
        street_address,
        state,
        zipcode,
        city,
        country,
        trip_type,
      })
      .then((res) => {
        console.log(res.data);
        notify();
      })
      .catch((err) => window.alert(err.response.data.msg));
  };

  // Rest of your component code
  const notify = () => {
    toast.success(`Your accommodation has been booked for ${formattedDate} to ${formattedDate2}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  // Rest of your component code

  return (
    <div>
      <Navbar />
      <div className="checkout">
        <div className="checkout-wrap">
          <div>
            <p className="r-title"> Make Reservation </p>
          </div>
          <div className="book-details">
            <div className="your-trip">
              <p className="t-d">Your Trip Details</p>
            </div>
            <div className="dates-edit">
              <div className="dates">
                <p className="d-1">Dates</p>
                <p className="d-2">
                  {formattedDate} - {formattedDate2}
                </p>
              </div>
              <div className="d-edit">
                <a>Edit</a>
              </div>
            </div>

            <div className="num-edit">
              <div className="num-p">
                <p className="n-1">Number of Participants</p>
                <p className="n-2">{trip?.numberOfGuests} participants</p>
              </div>
              <div className="n-edit">
                <a>Edit</a>
              </div>
            </div>
          </div>
          <div className="form-wrap">
            <div>
              <p className="c-d" style={{ fontSize: "20px", fontWeight: 600 }}>
                Checkout Details
              </p>
            </div>
            <Form onSubmit={() => {}}>
              <FormGroup>
                <Input
                  style={{ height: "56px", fontSize: "17px" }}
                  className="street"
                  id="street"
                  name="street"
                  placeholder="Street Address"
                  type="text"
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Input
                  style={{ height: "56px", fontSize: "17px" }}
                  className="apartment"
                  id="apartment"
                  name="apartment"
                  placeholder="Apartment number"
                  type="text"
                  onChange={(e) => setApartmentNumber(e.target.value)}
                />
              </FormGroup>
              <div>
                <FormGroup>
                  <Input
                    style={{ height: "56px", fontSize: "17px" }}
                    className="state"
                    id="state"
                    name="state"
                    placeholder="State"
                    type="text"
                    onChange={(e) => setState(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Input
                    style={{ height: "56px", fontSize: "17px" }}
                    className="zipcode"
                    id="zipcode"
                    name="zipcode"
                    placeholder="Zip code"
                    type="text"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </FormGroup>
              </div>

              <FormGroup>
                <Input
                  style={{ height: "56px", fontSize: "17px" }}
                  className="city"
                  id="city"
                  name="city"
                  placeholder="Enter city"
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  style={{ height: "56px", fontSize: "17px" }}
                  className="city"
                  id="country"
                  name="country"
                  placeholder="Enter country"
                  type="text"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </FormGroup>
              <div className="payment-div">
                <div className="pd-wrap">
                  <div className="pay-with">
                    <div className="pw1-d">
                      <p className="p-w-1"> Pay With </p>
                    </div>
                  </div>

                  <div className="img-click">
                    <div
                      className="khalti"
                      onClick={() => {
                        checkout.show({ amount: trip?.price * 100 * newNumP });
                      }}
                    >
                      <img
                        className="khalti-icon"
                        src="https://khalti-static.s3.ap-south-1.amazonaws.com/cloudfront-cdn/jamara/web19/images/khalti-logo.svg"
                      />
                    </div>

                    <div className="pw2-d">
                      <p className="p-w-2"> Click to pay </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="r-book-button">
                {/* <ReactStrapButton className="rb-1" >
                  Make Reservation
                </ReactStrapButton> */}
                <ReactStrapButton onClick={handleSubmit} className="rb-2">
                  Make Reservation
                </ReactStrapButton>
              </div>
            </Form>
          </div>
        </div>
        <div className="r-book-card">
          <div className="r-book-card-title">
            <p className="r-details">Reservation Info</p>
          </div>
          <div className="r-item-card">
            <div className="item">
              {trip && Array.isArray(trip.img) && trip.img.length > 0 ? (
                <>
                  <div className="i-img-box">
                    <img className="i-img" src={`${baseUrl}/${trip.img[0]}`} />
                  </div>
                </>
              ) : (
                <p>No images available.</p>
              )}

              <div className=" trip-d">
                <div className="i-d1">
                  <p className="i-1"> {trip?.name}</p>
                </div>
                <div className="i-d2">
                  <p className="i-2">
                    {formattedDate} to {formattedDate2}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="r-price-div">
            <div className="pd-1">
              <p className="price-d">Price Details</p>
            </div>
            <div className="pd-2">
              <div className="guests-price">
                <p className="gp-1">
                  {newNumP} guests x {trip?.price}
                </p>
              </div>

              <div className="price">
                <p className="gp-1">Nrs {trip?.price * newNumP} </p>
              </div>
            </div>
          </div>

          <div className="rd-p">
            <div className="rd-p-1">
              <p>Total price</p>
            </div>

            <div className="rd-p-2">
              <p> NRs {trip?.price * newNumP}</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

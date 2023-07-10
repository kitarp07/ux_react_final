import React from "react";
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

export default function () {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
                <p className="d-2">August 10-20</p>
              </div>
              <div className="d-edit">
                <a>Edit</a>
              </div>
            </div>

            <div className="num-edit">
              <div className="num-p">
                <p className="n-1">Number of Participants</p>
                <p className="n-2">3 participants</p>
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
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)
                  // }
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
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)
                  // }
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
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)
                    // }
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
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)
                    // }
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
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)
                  // }
                />
              </FormGroup>

              <div className="lbuttons">
                <ReactStrapButton className="button" color="primary">
                  Login
                </ReactStrapButton>

                <ReactStrapButton
                  onClick={() => {
                    // navigate("/register");
                  }}
                  className="button"
                  color="secondary"
                >
                  Register
                </ReactStrapButton>
              </div>
            </Form>
          </div>
        </div>
        <div className="r-book-card">
          <div className="r-book-card-title">
            <p className="r-details">Reservation details</p>
          </div>
          <div className="r-item-card">
            <div className="item">
              <div className="i-img-box"></div>
              <img
                className="i-img"
                src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
              />
              <div className=" trip-d">
                <div className="i-d1">
                  <p className="i-1"> Check in</p>
                </div>
                <div className="i-d2">
                  <p className="i-2">Add Date</p>
                </div>
              </div>
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
        </div>
      </div>
    </div>
  );
}

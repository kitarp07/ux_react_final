import React from "react";
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
import "./Modal.css";
import userServices from "../services/userServices";
import { useEffect } from "react";
export default function LoginModal({ showLoginModal, setShowLoginModal }) {

  function handleCallBackResponse(response){


  }

  useEffect (()=>{
    /* global google */
    // google.accounts.id.initialize({
    //   client_id: "354158358887-lds8tu0cuqo9b3jlidbae71cd6sh73c2.apps.googleusercontent.com",
    //   callback: handleCallBackResponse

    // })

    // google.accounts.id.renderButton(
    //   document.getElementById("g-signin"),
    //   {theme: "outline", size:"large"}
    // )

    
  }, [])
  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    userServices.login({ email, password })
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.removeItem("uid");
        window.localStorage.setItem("uid", res.data.userID);
        window.alert(" Logged in Successfully")
        closeModal()
        window.location.reload()
      })
      .catch((err) => window.alert(err.response.data.msg));
  };
  return (
    <div>
      <Modal show={showLoginModal} onHide={closeModal} className="customModal">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-body-text">Welcome to TravelHub</p>
          <Form>
            <FormGroup>
              <Label className="email" for="email">
                Email
              </Label>
              <Input
                className="emailInput"
                id="login-email"
                name="login-email"
                placeholder="Enter email"
                value={email}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label className="password" for="password">
                Password
              </Label>
              <Input
                className="passwordInput"
                id="login-password"
                name="login-password"
                placeholder="Enter password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <div onClick={handleLogin} className="lbuttons-r">
              <ReactStrapButton
                
                className="button-rr"
                id="loginButton">
                Login
              </ReactStrapButton>
            </div>

            {/* <div className="orca">Or</div> */}
            <div className="g-orc" id="g-orca">
             
              {/* <ReactStrapButton className="g-orca-b">
                <div className="btn-p-lwrap">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="google-svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    >
                      <path
                        fill="#4285f4"
                        d="M24.12 25c2.82-2.63 4.07-7 3.32-11.19H16.25v4.63h6.37A5.26 5.26 0 0 1 20.25 22z"
                      ></path>
                      <path
                        fill="#34a853"
                        d="M5.62 21.31A12 12 0 0 0 24.12 25l-3.87-3a7.16 7.16 0 0 1-10.69-3.75z"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="M9.56 18.25c-.5-1.56-.5-3 0-4.56l-3.94-3.07a12.08 12.08 0 0 0 0 10.7z"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="M9.56 13.69c1.38-4.32 7.25-6.82 11.19-3.13l3.44-3.37a11.8 11.8 0 0 0-18.57 3.43l3.94 3.07z"
                      ></path>
                    </svg>
                  </div>
                  <div className="cog-div">
                    <p>Continue with google</p>
                  </div>
                </div>
              </ReactStrapButton> */}
            </div>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

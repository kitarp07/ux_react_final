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
import { Button, message as antdmessage } from "antd";
import { useNavigate } from "react-router-dom";

export default function RegisterModal({ showRegModal, setShowRegModal }) {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    userServices.register({ name, contact, email, password })
      .then((res) => {
        console.log(res.data);
        window.alert("User registered successfully. Go to Login.");
        closeModal()
        
      })
      .catch((err) => window.alert(err.response.data.err));
  };

  const [messageApi, contextHolder] = antdmessage.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content:
        "This is a prompt message for success, and it will disappear in 10 seconds",
      duration: 10,
    });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowRegModal(false);
  };

  const handleLogin = () => {};
  return (
    <div>
      <Modal
        show={showRegModal}
        onHide={closeModal}
        className="customModal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-body-text">Welcome to TravelHub</p>
          <Form >
            <FormGroup>
              <Label className="name" for="name">
                Name
              </Label>
              <Input
                className="nameInput"
                id="name"
                name="name"
                placeholder="Enter name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label className="contact" for="contact">
                Phone Number
              </Label>
              <Input
                className="contactInput"
                id="contact"
                name="contact"
                placeholder="Enter phone number"
                type="text"
                onChange={(e) => setContact(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label className="email" for="email">
                Email
              </Label>
              <Input
                className="emailInput"
                id="email"
                name="email"
                placeholder="Enter email"
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
                id="password"
                name="password"
                placeholder="Enter password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <div className="lbuttons-r">
              <ReactStrapButton
                onClick={handleRegister}
                className="button-rr"
                color="secondary"
              >
                Register
              </ReactStrapButton>
            </div>

            <div className="orca">Or</div>
            <div className="g-orca">
              <ReactStrapButton className="g-orca-b">
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
              </ReactStrapButton>
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

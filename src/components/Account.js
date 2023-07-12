import React from "react";
import "./Account.css";
import Navbar from "./Navbar";
import { useState } from "react";
import {
  Button as ReactStrapButton,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
export default function Account() {
  const [showEdit, setShowEdit] = useState(true);
  const [showEmailEdit, setShowEmailEdit] = useState(true);
  const [showNumEdit, setShowNumEdit] = useState(true);
  const [showPasswordEdit, setShowPasswordEdit] = useState(true);

  const handleShowEdit = () => {
    setShowEdit(false);
  };

  const handleShowCancel = () => {
    setShowEdit(true);
  };

  const handleShowEmailEdit = () => {
    setShowEmailEdit(false);
  };

  const handleShowEmailCancel = () => {
    setShowEmailEdit(true);
  };

  const handleShowNumEdit = () => {
    setShowNumEdit(false);
  };

  const handleShowNumCancel = () => {
    setShowNumEdit(true);
  };

  const handleShowPassswordEdit = () => {
    setShowPasswordEdit(false);
  };

  const handleShowPasswordCancel = () => {
    setShowPasswordEdit(true);
  };
  return (
    <div>
      <Navbar />

      <div className="acc-title-div">
        <p className="acc-title">Account</p>
      </div>

      <div className="acc-wrap">
        <div>
          <div className="profile-card">
            <div className="acc-p-circle">
              <div className="p-img-div">
                <img
                  className="p-img"
                  src="https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=P&im_w=240&im_s=133.33&im_f=airbnb-cereal-medium.ttf&im_c=ffffff"
                />
              </div>
              <div className="profile-name">
                <div className="pnd-1">
                  <p className="pn1"> Pratik </p>
                </div>

                <div className="p-g-d">
                  <p className="p-g"> Guest </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="personal-details-div">
            <div className="personal-details">
              <div className="pdt-div">
                <p className="pd-title">Personal Info</p>
              </div>

              {showEdit ? (
                <div className="pd-list-div">
                  <div className="pd-div-wrap">
                    <div className="pd-name">
                      <div className="pd-pn-div">
                        <p className="pd-pn"> Name</p>
                      </div>
                      <div className="nv-div">
                        <p className="name-value"> John Doe</p>
                      </div>
                    </div>
                    <div className="pd-edit-div">
                      <div onClick={handleShowEdit} className="pd-edit-button">
                        <p>Edit</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pd-list-div-f">
                  <div className="pd-div-wrap-f">
                    <div className="pd-name">
                      <div className="pd-pn-div">
                        <p className="pd-pn"> Name</p>
                      </div>
                      <div className="profile-edit-form">
                        <Form>
                          <FormGroup>
                            <Input
                              className="edit-nameInput"
                              id="email"
                              name="email"
                              placeholder="John Doe"
                              type="text"
                              // value={username}
                              // onChange={(e) => setUsername(e.target.value)
                              // }
                            />
                          </FormGroup>
                          <div className="save-edit-button-div">
                            <ReactStrapButton
                              onClick={() => {
                                // navigate("/register");
                              }}
                              className="save-edit-button"
                              color="secondary"
                            >
                              Save
                            </ReactStrapButton>
                          </div>
                        </Form>{" "}
                      </div>
                    </div>
                    <div className="pd-edit-div">
                      <div
                        onClick={handleShowCancel}
                        className="pd-cancel-button"
                      >
                        <p>Cancel</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showEmailEdit ? (
                <div className="pd-list-div">
                  <div className="pd-div-wrap">
                    <div className="pd-name">
                      <div className="pd-pn-div">
                        <p className="pd-pn"> Email</p>
                      </div>
                      <div className="nv-div">
                        <p className="name-value"> johndoe@gmail.com</p>
                      </div>
                    </div>
                    <div className="pd-edit-div">
                      <div
                        onClick={handleShowEmailEdit}
                        className="pd-edit-button"
                      >
                        <p>Edit</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pd-list-div-f">
                  <div className="pd-div-wrap-f">
                    <div className="pd-name">
                      <div className="pd-pn-div">
                        <p className="pd-pn"> Name</p>
                      </div>
                      <div className="profile-edit-form">
                        <Form>
                          <FormGroup>
                            <Input
                              className="edit-emailInput"
                              id="email"
                              name="email"
                              placeholder="johndoe@gmail.com"
                              type="text"
                              // value={username}
                              // onChange={(e) => setUsername(e.target.value)
                              // }
                            />
                          </FormGroup>
                          <div className="save-edit-button-div">
                            <ReactStrapButton
                              onClick={() => {
                                // navigate("/register");
                              }}
                              className="save-edit-button"
                              color="secondary"
                            >
                              Save
                            </ReactStrapButton>
                          </div>
                        </Form>{" "}
                      </div>
                    </div>
                    <div className="pd-edit-div">
                      <div
                        onClick={handleShowEmailCancel}
                        className="pd-cancel-button"
                      >
                        <p>Cancel</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showNumEdit ? (
                <div className="pd-list-div">
                  <div className="pd-div-wrap">
                    <div className="pd-name">
                      <div className="pd-pn-div">
                        <p className="pd-pn"> Phone number</p>
                      </div>
                      <div className="nv-div">
                        <p className="name-value"> 9856789012</p>
                      </div>
                    </div>
                    <div className="pd-edit-div">
                      <div
                        onClick={handleShowNumEdit}
                        className="pd-edit-button"
                      >
                        <p>Edit</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pd-list-div-f">
                  <div className="pd-div-wrap-f">
                    <div className="pd-name">
                      <div className="pd-pn-div">
                        <p className="pd-pn"> Name</p>
                      </div>
                      <div className="profile-edit-form">
                        <Form>
                          <FormGroup>
                            <Input
                              className="edit-contactInput"
                              id="contact"
                              name="contact"
                              placeholder="9856789012"
                              type="text"
                              // value={username}
                              // onChange={(e) => setUsername(e.target.value)
                              // }
                            />
                          </FormGroup>
                          <div className="save-edit-button-div">
                            <ReactStrapButton
                              onClick={() => {
                                // navigate("/register");
                              }}
                              className="save-edit-button"
                              color="secondary"
                            >
                              Save
                            </ReactStrapButton>
                          </div>
                        </Form>{" "}
                      </div>
                    </div>
                    <div className="pd-edit-div">
                      <div
                        onClick={handleShowNumCancel}
                        className="pd-cancel-button"
                      >
                        <p>Cancel</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="security-div">
        <div className="security-title-div">
          <div className="s-c">
            <p className="sc-title">Password and Security</p>
          </div>
        </div>
        {showPasswordEdit ? (
          <div className="pd-list-div">
            <div className="pd-div-wrap">
              <div className="pd-name">
                <div className="pd-pn-div">
                  <p className="pd-pn"> Password</p>
                </div>
                <div className="nv-div">
                  <p className="name-value"> ********</p>
                </div>
              </div>
              <div className="pd-edit-div">
                <div onClick={handleShowPassswordEdit} className="pd-edit-button">
                  <p>Update</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="pd-list-div-f">
            <div className="pd-div-wrap-f-pw">
              <div className="pd-name">
                <div className="pd-pn-div">
                  <p className="pd-pn"> Old Password</p>
                </div>
                <div className="profile-edit-form">
                  <Form>
                    <FormGroup>
                      <Input
                        className="edit-contactInput"
                        id="old-password"
                        name="old-password"
                        placeholder="Enter old password"
                        type="text"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)
                        // }
                      />
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            New Password
                        </Label>
                      <Input
                        className="edit-contactInput"
                        id="new-password"
                        name="new-password"
                        placeholder="Enter new password"
                        type="text"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)
                        // }
                      />
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            Confirm Password
                        </Label>
                      <Input
                        className="edit-contactInput"
                        id="confirm-password"
                        name="confirm-password"
                        placeholder="Enter new password"
                        type="text"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)
                        // }
                      />
                    </FormGroup>
                    <div className="save-edit-button-div">
                      <ReactStrapButton
                        onClick={() => {
                          // navigate("/register");
                        }}
                        className="save-edit-button"
                        color="secondary"
                      >
                        Update
                      </ReactStrapButton>
                    </div>
                  </Form>{" "}
                </div>
              </div>
              <div className="pd-edit-div">
                <div onClick={handleShowPasswordCancel} className="pd-cancel-button">
                  <p>Cancel</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

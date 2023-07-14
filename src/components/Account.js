import React, { useEffect } from "react";
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
import userServices from "../services/userServices";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Account() {
  const [showEdit, setShowEdit] = useState(true);
  const [showEmailEdit, setShowEmailEdit] = useState(true);
  const [showNumEdit, setShowNumEdit] = useState(true);
  const [showPasswordEdit, setShowPasswordEdit] = useState(true);

  const [fullname, setFullname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = (e) => {
    const uid = window.localStorage.getItem("uid");
    e.preventDefault();
    console.log(fullname);

    userServices
      .update(id, { fullname, email, contact, password })
      .then((res) => {
        console.log(res);

        window.location.reload();
      })
      .catch((err) => window.alert(err.response.data.err));
  };



  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    userServices.getUser(id).then((res) => {
      console.log(res.data);
      setUser(res.data);
      console.log(user);
    });
  }, []);

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

  const notifySuccess = () => {
    toast.success(
      `Your passowrd has been changed!`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  const notifyError = () => {
    toast.error("Error in password change", {
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
  return (
    <div>
      <Navbar />
      <div className="acc-title-div">
        <p className="acc-title">Account</p>
      </div>
      <Form>
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
                    <p className="pn1"> {user?.fullname} </p>
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
                          <p className="name-value"> {user?.fullname}</p>
                        </div>
                      </div>
                      <div className="pd-edit-div">
                        <div
                          onClick={handleShowEdit}
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
                          <FormGroup>
                            <Input
                              className="edit-nameInput"
                              id="email"
                              name="email"
                              placeholder={user?.fullname}
                              type="text"
                              value={fullname}
                              onChange={(e) => setFullname(e.target.value)}
                            />
                          </FormGroup>
                          <div className="save-edit-button-div">
                            <ReactStrapButton
                              onClick={handleSave}
                              className="save-edit-button"
                              color="secondary"
                            >
                              Save
                            </ReactStrapButton>
                          </div>
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
                          <p className="name-value"> {user?.email}</p>
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
                          <p className="pd-pn"> Email</p>
                        </div>
                        <div className="profile-edit-form">
                          <FormGroup>
                            <Input
                              className="edit-emailInput"
                              id="email"
                              name="email"
                              placeholder={user?.email}
                              type="text"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </FormGroup>
                          <div className="save-edit-button-div">
                            <ReactStrapButton
                              onClick={handleSave}
                              className="save-edit-button"
                              color="secondary"
                            >
                              Save
                            </ReactStrapButton>
                          </div>
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
                          <p className="name-value"> {user?.contact}</p>
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
                          <p className="pd-pn"> Contact</p>
                        </div>
                        <div className="profile-edit-form">
                          <FormGroup>
                            <Input
                              className="edit-contactInput"
                              id="contact"
                              name="contact"
                              placeholder={user?.contact}
                              type="text"
                              onChange={(e) => setContact(e.target.value)}
                            />
                          </FormGroup>
                          <div className="save-edit-button-div">
                            <ReactStrapButton
                              onClick={handleSave}
                              className="save-edit-button"
                              color="secondary"
                            >
                              Save
                            </ReactStrapButton>
                          </div>
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
                  <div
                    onClick={handleShowPassswordEdit}
                    className="pd-edit-button"
                  >
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
                    <FormGroup>
                      <Input
                        className="edit-contactInput"
                        id="old-password"
                        name="old-password"
                        placeholder="Enter old password"
                        type="text"
                  
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>New Password</Label>
                      <Input
                        className="edit-contactInput"
                        id="new-password"
                        name="new-password"
                        placeholder="Enter new password"
                        type="text"
                    
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>Confirm Password</Label>
                      <Input
                        className="edit-contactInput"
                        id="confirm-password"
                        name="confirm-password"
                        placeholder="Enter new password"
                        type="text"
                     
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </FormGroup>
                    <div className="save-edit-button-div">
                      <ReactStrapButton
                        onClick={handleSave}
                        className="save-edit-button"
                        color="secondary"
                      >
                        Update
                      </ReactStrapButton>
                    </div>
                  </div>
                </div>
                <div className="pd-edit-div">
                  <div
                    onClick={handleShowPasswordCancel}
                    className="pd-cancel-button"
                  >
                    <p>Cancel</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Form>{" "}
    </div>
  );
}

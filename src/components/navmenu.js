import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./Navbar2.css";
import "./Modal.css";
import { useState } from "react";
import userServices from "../services/userServices";


import {
  Button as ReactStrapButton,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "popper.js/dist/popper.min.js";
import "jquery/dist/jquery.min.js";

import RegisterModal from "./RegModal";
import LoginModal from "./LoginModal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BasicMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [showModal, setShowModal] = useState(false);
  const [showRegModal, setShowRegModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openRegModal = () => {
    setShowRegModal(true);
  };
  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleLogin = () => {};

  const [user, setUser] = useState(null);

  useEffect(() => {
    const uid = window.localStorage.getItem("uid");
    console.log(uid);
    if (window.localStorage.getItem("uid") != null) {
      userServices
        .getUser(window.localStorage.getItem("uid"))
        .then((res) => {
          console.log(res);
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const uid = window.localStorage.getItem("uid");
    const token = window.localStorage.getItem("token");

    if (uid && token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  
  const id = window.localStorage.getItem("uid");
  const handleLogout = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("uid");
    window.localStorage.removeItem("token");
    setIsLoggedIn(false)
    window.alert("You have logged out");
    window.location.reload();
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profile-item"
      >
        <MenuRoundedIcon />
        <AccountCircleRoundedIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            borderRadius: "3px",
            minWidth: "200px",
            marginTop: "3px",
          },
        }}
      >
        {isLoggedIn ? (
          <div>
            <MenuItem className="menu-item" onClick={handleClose}>
              <a onClick={() => {navigate(`/account/${id}`)}}>Account</a>
            </MenuItem>
            <MenuItem className="menu-item" onClick={handleClose}>
              <a onClick={handleLogout}>Logout</a>
            </MenuItem>
            <div
              style={{ height: "1px", backgroundColor: "#ddd", width: "100%" }}
            ></div>

            <MenuItem className="menu-item" onClick={handleClose}>
              Find new experiences
            </MenuItem>
            <MenuItem className="menu-item" onClick={handleClose}>
              Help
            </MenuItem>
            <MenuItem className="menu-item" onClick={handleClose}>
              About
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem className="menu-item" onClick={handleClose}>
              <a onClick={openRegModal}>Signup</a>
            </MenuItem>
            <MenuItem className="menu-item" onClick={handleClose}>
              <a onClick={openLoginModal}>Login</a>
            </MenuItem>
            <MenuItem className="menu-item" onClick={handleClose}>
              Find new experiences
            </MenuItem>
            <MenuItem className="menu-item" onClick={handleClose}>
              Help
            </MenuItem>
            <MenuItem className="menu-item" onClick={handleClose}>
              About
            </MenuItem>
          </div>
        )}
      </Menu>

      <RegisterModal
        showRegModal={showRegModal}
        setShowRegModal={setShowRegModal}
      />
      <LoginModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
    </div>
  );
}

import * as React from "react";
import "./Navbar2.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import logo from "../assets/logo/logo5.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BasicMenu from "./navmenu";
import SimpleBottomNavigation from "./BottomNavigation";
import MobileSearchBar from "./MobileSearchBar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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
import { Height } from "@mui/icons-material";

// import userServices from '../services/userServices';

export default function Navbar() {

  const navigate = useNavigate();
  const baseUrl = "http://localhost:3000/";
  // const[user, setUser] = useState([]);

  const handleLogout = (e) => {
    // e.preventDefault();
    // window.localStorage.removeItem("uid")
    // window.localStorage.removeItem("token")
    // navigate('/login')
    // window.location.reload()
  };

  const handleDelete = (e) => {
    e.preventDefault();

    // userServices.deleteAccount(window.localStorage.getItem("uid")).then(res => {
    //     console.log(res.data)
    //     window.alert(res.data.status)
    //     navigate('/login')
    //     window.location.reload()

    // }).catch(err => window.alert(err.response.data.err))
  };
  // useEffect(() => {
  //     const uid = (window.localStorage.getItem("uid"))
  //     console.log(uid)
  //     if (window.localStorage.getItem("uid") != null) {
  //       userServices.getUser(window.localStorage.getItem("uid"))
  //         .then((res) => {
  //           console.log(res)
  //           setUser(res.data)

  //         }).catch((err) => { console.log(err) })
  //     }
  //   }, [])

  //   console.log(user)

  return (
    <div className="nnavbar">
      <img
        onClick={() => {
          navigate("/home");
        }}
        src={logo}
        alt="logo"
        className="navbar-logo"
      />

      <div>
        <div
          
          className="search"
        >
          <div className="sd-1 ">
            <div className="sd-dd ">Where to</div>
            <div className="sd-dd-2">Search destination</div>
          </div>

          <div className="sd-1-1">
            <div className="sd-dd">Dates</div>
            <div className="sd-dd-2">Add Dates</div>
          </div>

          <div className="search-item3">Click to Search</div>
          <div className="search-icon-container">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path
                fill="none"
                d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
              ></path>
            </svg>
          </div>
        </div>
        
      </div>
      <div className="nav-items">
        <div
          onClick={() => {
            navigate("/home");
          }}
          className="item"
        >
          {" "}
          Home{" "}
        </div>
        <div className="trips">My Trips</div>
        <div className="profile">
          <BasicMenu />
        </div>
      </div>
      <MobileSearchBar />

      <SimpleBottomNavigation />
    </div>
  );
}

import "./Navbar2.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import logo from "../assets/logo/logo5.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BasicMenu from "./navmenu";
import SimpleBottomNavigation from "./BottomNavigation";
import MobileSearchBar from "./MobileSearchBar";
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
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="search">
        <div className="search-item">Destination</div>
        <div className="search-item">Time</div>
        <div className="search-item2">Guests</div>
        <div className="search-icon-container">
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
      <div className="nav-items">
        <div className="item"> Home </div>
        <div className="trips">My Trips</div>
        <div className="profile">
          <BasicMenu />
        </div>
        
      </div>
      <MobileSearchBar />
      
      <SimpleBottomNavigation />

      {/* --------------------------------- */}

      {/* <div className="navbarMain">
        <div className="navLeft">
          <span className="logo">Chat</span>
        </div>

        <div className="navCenter">
          <div></div>
        </div>

        <div className="navRight">
          <div className="links">
            <div className="navLink" onClick={() => navigate("/")}>
              Home
            </div>

            <div class="dropdown">
              <div className="navLink" class=" navLink dropbtn">
                Settings
              </div>
              <div class="dropdown-content">
                <a href="/editaccount">Edit Profile</a>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                >
                  Delete Account
                </a>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#logoutModal"
                >
                  Logout
                </a>
              </div>
            </div>
            <div className="c" onClick={() => navigate("/editaccount")}>
              <div className="navImgC">
                <img className="navImg" src="" alt=""></img>
              </div>
              <div className="navName">
                <span>user.fname </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="logoutModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Logout
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Do you want to logout?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleLogout}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="deleteModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Delete Account
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Do you want to delete your account?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleDelete}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

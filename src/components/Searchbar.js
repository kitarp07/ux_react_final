// import * as React from "react";
// import "./Navbar2.css";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import logo from "../assets/logo/logo5.png";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import BasicMenu from "./navmenu";
// import SimpleBottomNavigation from "./BottomNavigation";
// import MobileSearchBar from "./MobileSearchBar";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import {
//   Button as ReactStrapButton,
//   Form,
//   FormFeedback,
//   FormGroup,
//   Input,
//   Label,
// } from "reactstrap";
// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "popper.js/dist/popper.min.js";
// import "jquery/dist/jquery.min.js";

// export default function CustomSearchhbar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <div>
//       <div className="search" onClick={handleClick}>
//         <div className="sd-1 ">
//           <div className="sd-dd ">Where to</div>
//           <div className="sd-dd-2">Search destination</div>
//         </div>

//         <div className="sd-1-1">
//           <div className="sd-dd">Dates</div>
//           <div className="sd-dd-2">Add Dates</div>
//         </div>

//         <div className="search-item3">Click to Search</div>
//         <div className="search-icon-container">
//           <svg
//             className="search-icon"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 32 32"
//             aria-hidden="true"
//             role="presentation"
//             focusable="false"
//           >
//             <path
//               fill="none"
//               d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
//             ></path>
//           </svg>
//         </div>
//         <Menu
//           id="basic-menu"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           MenuListProps={{
//             "aria-labelledby": "basic-button",
//           }}
//           sx={{
//             ".MuiPaper-root": {
//               borderRadius: "40px",
//               minWidth: "700px",
//               marginTop: "3px",
//               left: "370px !important",
//             },
//           }}
//         >
//           <MenuItem className="menu-item" onClick={handleClose}>
//             <div className="search-form-div">
//               <div>Search for a place</div>

//               <div>pick dates</div>

//               <div>Search button</div>
//             </div>
//           </MenuItem>
//         </Menu>
//       </div>
//     </div>
//   );
// }

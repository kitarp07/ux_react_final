import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./Navbar2.css";
import "./Modal.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Button as ReactStrapButton, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "popper.js/dist/popper.min.js";
import "jquery/dist/jquery.min.js";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}

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
        <MenuItem className="menu-item" onClick={handleClose}>
          Signup
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleClose}>
          <a onClick={openModal}>Login</a>
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
      </Menu>

      <div>

      <Modal show={showModal} onHide={closeModal} className="customModal">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-body-text">Welcome to travelhub</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Modal show={showModal} onHide={closeModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal content goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>

      
    </div>
  );
}

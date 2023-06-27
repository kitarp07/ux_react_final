import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "./Navbar2.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        
        <MenuRoundedIcon/>
        <AccountCircleRoundedIcon/>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{".MuiPaper-root": {borderRadius:"3px", minWidth:"200px", marginTop:"3px"}}}
        
      >
        <MenuItem className="menu-item"  onClick={handleClose}>Signup</MenuItem>
        <MenuItem className="menu-item" onClick={handleClose}>Login</MenuItem>
        <div style={{height:"1px", backgroundColor: "#ddd", width:"100%"}}></div>
        <MenuItem className="menu-item" onClick={handleClose}>Find new experiences</MenuItem>
        <MenuItem className="menu-item" onClick={handleClose}>Help</MenuItem>
        <MenuItem className="menu-item" onClick={handleClose}>About</MenuItem>
      </Menu>
    </div>
  );
}

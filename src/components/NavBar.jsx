import React from "react";
import Typography from "@mui/material/Typography";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const pages = ["Home", "Slider", "Menu", "Promotions", "Reviews", "Abouts"];
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(signout());
    navigate("/");
  };
  
  return (
    <Box>
      <AppBar
        position="relative"
        sx={{ backgroundColor: "white", height: "10vh", width: "100%" }}
      >
        <Toolbar>
          <Box sx={{flexGrow:1, p:2}}>
            <img src="./logo.png" style={{ width: "100px"}} />
          </Box>
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

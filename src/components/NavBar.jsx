import React from "react";
import Typography from "@mui/material/Typography";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import WidgetsIcon from "@mui/icons-material/Widgets";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import SavingsIcon from "@mui/icons-material/Savings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { ExitToApp } from "@mui/icons-material";

export default function NavBar() {
  const pages = ["Home", "Slider", "Menu", "Promotions", "Reviews", "Abouts"];
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(signout());
    navigate("/");
  };
  return (
    <Box sx={{ display: "flex", flexWrap:'wrap' }}>
      <AppBar
        position="absolute"
        sx={{ backgroundColor: "white", height: "10vh",width:'100%' }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "primary.main" }}
          >
            Nombre o logo
          </Typography>
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
      <AppBar position="relative" sx={{ backgroundColor: "red", width: "75px", height: "90vh" }}>
        a
      </AppBar>
      {/*  <Drawer
        variant="permanent"
        sx={{
          width: "50px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "50px",
            backgroundColor: "#1b1847",
          },
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <List sx={{ flexGrow: 1 }}>
            <Divider sx={{ color: "white" }} />
            <List>
              {[
                "Admin",
                "Products",
                "Sliders",
                "Promotions",
                "Reports",
                "Settings",
              ].map((text, index) => (
                <ListItem key={index} disablePadding>
                  <Link
                    to={text.toLowerCase()}
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        {text === "Admin" ? (
                          <SupervisorAccountIcon sx={{ color: "white" }} />
                        ) : text === "Products" ? (
                          <WidgetsIcon sx={{ color: "white" }} />
                        ) : text === "Sliders" ? (
                          <SlideshowIcon sx={{ color: "white" }} />
                        ) : text === "Promotions" ? (
                          <SavingsIcon sx={{ color: "white" }} />
                        ) : text === "Reports" ? (
                          <AssessmentIcon sx={{ color: "white" }} />
                        ) : (
                          <SettingsIcon sx={{ color: "white" }} />
                        )}
                      </ListItemIcon>
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </List>
          <Box
            sx={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <ListItem
              sx={{
                paddingTop: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
                maxWidth: "140px",
                cursor: "pointer",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#6e8be8",
                  "& .MuiListItemText-primary": {
                    color: "darkblue",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "darkblue",
                  },
                },
              }}
              onClick={handleLogout}
            >
              <ListItemIcon>
                <ExitToApp sx={{ color: "#6e8be8" }} />
              </ListItemIcon>
            </ListItem>
          </Box>
        </Box>
      </Drawer> */}
    </Box>
  );
}

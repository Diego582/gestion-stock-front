import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import StoreIcon from "@mui/icons-material/Store";
import GroupIcon from "@mui/icons-material/Group";
import FeedIcon from "@mui/icons-material/Feed";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

export default function MenuBar() {
  const categories = ["Ventas", "Compras", "Clientes", "Reportes"];

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: "90vh",
        width: "5vw",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <List>
        {categories.map((text, index) => (
          <ListItem key={index} disablePadding>
            <Link to={text.toLowerCase()} style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon>
                  {text === "Ventas" ? (
                    <ShoppingCartCheckoutIcon sx={{ color: "white" }} />
                  ) : text === "Compras" ? (
                    <StoreIcon sx={{ color: "white" }} />
                  ) : text === "Clientes" ? (
                    <GroupIcon sx={{ color: "white" }} />
                  ) : (
                    <FeedIcon sx={{ color: "white" }} />
                  )}
                </ListItemIcon>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem>
          <ListItemIcon>
            <ExitToAppIcon sx={{ color: "white" }} />
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
}

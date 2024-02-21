import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import StoreIcon from "@mui/icons-material/Store";
import GroupIcon from "@mui/icons-material/Group";
import FeedIcon from "@mui/icons-material/Feed";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

export default function NavSales() {
  const categories = ["Ventas", "Compras", "Clientes", "Reportes"];

  return (
    <Box
      sx={{
        width: "95vw",
        height: "8vh",
        backgroundColor: "tertiary.main",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {categories.map((text, index) => (
        <Box key={index} disablePadding>
          <Link to={text.toLowerCase()} style={{ textDecoration: "none" }}>
            <Box>
              <Tooltip title={text}>
                <IconButton sx={{}}>
                  {text === "Ventas" ? (
                    <ShoppingCartCheckoutIcon sx={{ color: "white" }} />
                  ) : text === "Compras" ? (
                    <StoreIcon sx={{ color: "white" }} />
                  ) : text === "Clientes" ? (
                    <GroupIcon sx={{ color: "white" }} />
                  ) : (
                    <FeedIcon sx={{ color: "white" }} />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

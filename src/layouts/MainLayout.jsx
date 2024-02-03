import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
  return (
    <Box>
      {/* <NavBar /> */}
      <Box>
        <Outlet />
      </Box>
     {/*  <Footer/> */}
    </Box>
  );
}
import Typography from "@mui/material/Typography";
import NavSales from "../components/NavSales";
import { Box } from "@mui/material";

const Sales = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <NavSales />
      <Box sx={{ height: "82vh" }}>
        <Typography variant="h1" color="initial">
          ESTO ES Ventas
        </Typography>
      </Box>
    </Box>
  );
};

export default Sales;

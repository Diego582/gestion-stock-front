import NavSales from "../components/NavSales";
import { Box } from "@mui/material";
import TableVentas from "../components/TableVentas";

const Sales = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <NavSales />
      <Box sx={{ height: "82vh" }}>
        <TableVentas />
      </Box>
    </Box>
  );
};

export default Sales;

import { Box, Button, Divider, Typography } from "@mui/material";
import NavSales from "../components/NavSales";
import { useState } from "react";
import CrudSales from "../components/CrudSales";
import TableSales from "../components/TableSales";

const Check = () => {
  const handleOpenCloseCreate = () => {};

  const [currentDate] = useState(new Date());
  const [total] = useState(0);
  const [comprobante] = useState(0);

  console.log(currentDate, "currentdate");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "90vh",
      }}
    >
      <NavSales />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          mt: 1,
          mb: 1,
        }}
      >
        <Typography variant="h5">Comprobante N°: {comprobante}</Typography>
        <Typography variant="h5">
          Fecha: {currentDate.getDate()}/{currentDate.getMonth()}/
          {currentDate.getFullYear()}
        </Typography>
        <Typography variant="h5">Monto: {total}</Typography>
      </Box>
      <Divider />
      <CrudSales />
      <Divider />
      <TableSales />
    </Box>
  );
};

export default Check;

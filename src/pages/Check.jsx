import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import NavSales from "../components/NavSales";
import { useEffect, useState } from "react";
import TableSales from "../components/TableSales";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SaveIcon from "@mui/icons-material/Save";
import check_actions from "../store/actions/check";
import { useDispatch, useSelector } from "react-redux";
import SelectCustomer from "../components/SelectCustomer";

const { read_checks, read_last_check } = check_actions;

const Check = () => {
  const dispatch = useDispatch();

  const handleOpenCloseCreate = () => {};

  const [currentDate] = useState(new Date());
  const [total, setTotal] = useState(0);
  const [comprobante] = useState(0);

  const checks = useSelector((store) => store.checks.check);

  const checkLast = useSelector((store) => store.checks.checkLast);

  console.log(currentDate, "currentdate");
  console.log(checks, "storeCheck");
  console.log(checkLast, "checkLast");

  useEffect(() => {
    dispatch(read_checks());
    dispatch(read_last_check());
  }, []);

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
          alignItems: "center",
          flexWrap: "wrap",
          mt: 1,
          mb: 1,
        }}
      >
        <Typography variant="h5">Ticket N°: 1-{comprobante}</Typography>
        <Typography variant="h5">
          Fecha: {currentDate.getDate()}/{currentDate.getMonth() + 1}/
          {currentDate.getFullYear()}
        </Typography>
        <Typography variant="h5">Monto: $ {total.toFixed(2)}</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton>
            <AddBoxIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <LocalPrintshopIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <SaveIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <SelectCustomer />
      <Divider />
      <TableSales total={total} setTotal={setTotal} />
    </Box>
  );
};

export default Check;

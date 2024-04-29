import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import customer_actions from "../store/actions/customers";
import { useEffect, useState } from "react";

const { read_customers, read_customer } = customer_actions;

export default function SelectCustomer() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState({ lastName: "" });

  const customer = useSelector((store) => store.customers.customer);

  const customers = useSelector((store) => store.customers.customers);

  const handleSelect = (id) => {
    console.log(id, "se ejecuto handleselect");
    dispatch(read_customer({ _id: id }));
  };

  console.log(customers, "customers en select customer");
  useEffect(() => {
    dispatch(read_customers(search));
  }, [search]);
  console.log(customer, "customer");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 0.75,
        mb: 0.75,
      }}
    >
      <Typography
        sx={{ mr: 1, ml: 1, textAlign: "center", minWidth: "100px" }}
        variant="h5"
      >
        Cliente :
      </Typography>
      <TextField
        sx={{ minWidth: "200px", mr: 1, ml: 1 }}
        variant="filled"
        label="DNI / CUIT"
        select
        defaultValue=""
      >
        {customers.map((option) => (
          <MenuItem
            key={option._id}
            value={option.cuit}
            onClick={() => {
              handleSelect(option._id);
            }}
          >
            {option.lastName} , {option.name}
          </MenuItem>
        ))}
      </TextField>
      <Typography
        sx={{ mr: 1, ml: 1, textAlign: "left", width: "100%" }}
        variant="h5"
      >
        {customer && customer.name} {customer && customer.lastName} - DNI :{" "}
        {customer && customer.dni}
      </Typography>
    </Box>
  );
}

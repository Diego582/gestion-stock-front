import {
  Box,
  Button,
  Divider,
  MenuItem,
  Modal,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import product_actions from "../store/actions/products";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CreateAgrupamiento from "./CreateAgrupamiento";
const { read_product, read_products } = product_actions;

export default function CreateProduct({ openCreate, setOpenCreate }) {
  const dispatch = useDispatch();
  const productSearch = useSelector((store) => store.products.product);
  const [openCreateAgru, setOpenCreateAgru] = useState(false);

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const [codigoBarras, setCodigoBarras] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeSearch = (e) => {
    const { name, value } = e.target;
    setCodigoBarras((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleOpenCloseCreate = () => {
    setOpenCreate(!openCreate);
  };

  const handleOpenCloseCreateAgru = () => {
    setOpenCreateAgru(!openCreateAgru);
  };
  const handlePost = (codigo) => {
    dispatch(read_product(codigo));
  };

  useEffect(() => {
    dispatch(read_product(codigoBarras));
  }, [codigoBarras]);

  console.log(codigoBarras, "codigo de barras");
  console.log(productSearch, "productSearch");
  return (
    <>
      <Modal open={openCreate} onClose={handleOpenCloseCreate}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "75%",
            height: "75%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            display: "grid",
            alignContent: "space-around",
            justifyItems: "center",
          }}
        >
          <Typography variant="h4" color="secondary">
            Crear nuevo Producto
          </Typography>
          <Box sx={{ width: "100%", mt: 1, pt: 1 }}>
            <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
              <TextField
                autoFocus
                required
                fullWidth
                name="agrupamiento"
                select
                label="Agrupamiento"
                variant="filled"
                onChange={handleChange}
                defaultValue=""
                sx={{ m: 0.5, p: 0.5 }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <IconButton onClick={handleOpenCloseCreateAgru}>
                <AddCircleIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                m: 0.5,
                p: 0.5,
              }}
            >
              <TextField
                fullWidth
                required
                name="codigoBarras"
                label="Codigo de Barras"
                variant="filled"
                onChange={handleChangeSearch}
                sx={{ mr: 0.5 }}
              />
              <TextField
                name="categoria"
                disabled
                fullWidth
                required
                label="Categoria"
                variant="filled"
                onChange={handleChange}
                inputProps={{ maxLength: 8 }}
                sx={{ ml: 0.5 }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                m: 0.5,
                p: 0.5,
              }}
            >
              <TextField
                name="descripcion"
                disabled
                fullWidth
                required
                label="Descripcion"
                variant="filled"
                onChange={handleChange}
              />
            </Box>
          </Box>

          <Divider />
          <Box
            sx={{
              width: "75%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              onClick={handleOpenCloseCreate}
              variant="contained"
              color="error"
              sx={{ mr: 0.5, ml: 0.5 }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="success"
              onClick={() => handlePost(codigoBarras)}
            >
              Verificar
            </Button>
          </Box>
        </Box>
       {/*  <CreateAgrupamiento
          openCreateAgru={openCreateAgru}
          setOpenCreateAgru={handleOpenCloseCreateAgru}
        /> */}
      </Modal>
    </>
  );
}

import {
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import product_actions from "../store/actions/products";
const { read_product, read_products } = product_actions;

export default function CreateProduct({ openCreate, setOpenCreate }) {
  const dispatch = useDispatch();
  const handleOpenCloseCreate = () => {
    setOpenCreate(!openCreate);
  };

  const [codigoBarras, setCodigoBarras] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(read_product(codigoBarras));
  }, [codigoBarras]);

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
                autoFocus
                fullWidth
                name="codigoBarras"
                label="Codigo de Barras"
                variant="filled"
                onChange={handleChange}
                sx={{ mr: 0.5 }}
              />
              <TextField
                name="descripcion"
                fullWidth
                label="Descripcion"
                variant="filled"
                onChange={handleChange}
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
                name="categoria"
                fullWidth
                required
                label="Categoria"
                variant="filled"
                onChange={handleChange}
                inputProps={{ maxLength: 8 }}
                sx={{ mr: 0.5 }}
              />
            </Box>
            <TextField
              name="agrupamiento"
              fullWidth
              label="Agrupamiento"
              variant="filled"
              onChange={handleChange}
              sx={{ m: 0.5, p: 0.5 }}
            />
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
              onClick={() => handlePost(cliente)}
            >
              Guardar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

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
import CreateGrouping from "./CreateGrouping";
import grouping_actions from "../store/actions/groupings";
import productBase_actions from "../store/actions/productBase";

const { read_product, read_products } = product_actions;
const { read_groupings } = grouping_actions;
const { read_products_base } = productBase_actions;

export default function CreateProduct({ openCreate, setOpenCreate }) {
  const dispatch = useDispatch();
  const productSearch = useSelector((store) => store.products.product);
  const currencies = useSelector((store) => store.groupings.groupings);
  const productBase = useSelector((store) => store.productBase.productBase);

  const [openCreateAgru, setOpenCreateAgru] = useState(false);
  const [codigoBarras, setCodigoBarras] = useState("");

  const [product, setProduct] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
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
  const handlePost = () => {
    let productPost = {
      codigoBarras: codigoBarras.codigoBarras,
      descripcion: productBase[0].descripcion,
      categoria: productBase[0].categoria,
      agrupamiento: product.agrupamiento,
    };
    console.log(productPost, "productPost");
    /*  dispatch(read_product(codigo)); */
  };

  useEffect(() => {
    dispatch(read_groupings());
    dispatch(read_products_base(codigoBarras));
  }, [codigoBarras]);

  console.log(codigoBarras, "codigo de barras");
  console.log(productSearch, "productSearch");
  console.log(product, "product");
  console.log(productBase, "productBase");

  return (
    <>
      <Modal
        open={openCreate}
        onClose={handleOpenCloseCreate}
        sx={{ zIndex: 100 }}
      >
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
                  <MenuItem key={option._id} value={option.descripcion}>
                    {option.descripcion}
                  </MenuItem>
                ))}
              </TextField>
              <IconButton onClick={handleOpenCloseCreateAgru}>
                <AddCircleIcon fontSize="large" color="secondary" />
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
                focused
                value={productBase && productBase.categoria}
                fullWidth
                required
                label="Categoria"
                variant="filled"
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
                value={productBase && productBase.descripcion}
                fullWidth
                focused
                required
                label="Descripcion"
                variant="filled"
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
              sx={{ color: "white" }}
              type="submit"
              variant="contained"
              color="info"
              onClick={() => handlePost(codigoBarras)}
            >
              Verificar
            </Button>
          </Box>
        </Box>
      </Modal>
      <CreateGrouping
        openCreateAgru={openCreateAgru}
        setOpenCreateAgru={handleOpenCloseCreateAgru}
      />
    </>
  );
}

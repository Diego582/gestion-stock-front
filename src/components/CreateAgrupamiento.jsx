import {
  Box,
  Button,
  Divider,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

export default function CreateAgrupamiento({
  openCreateAgru,
  setOpenCreateAgru,
}) {
  const dispatch = useDispatch();
  const productSearch = useSelector((store) => store.products.product);
  const [codigoBarras, setCodigoBarras] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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

  return (
    <>
      <Modal open={openCreateAgru} onClose={handleOpenCloseCreateAgru}>
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
            Crear nuevo Agrupamiento
          </Typography>
          <Box sx={{ width: "100%", mt: 1, pt: 1 }}>
            <TextField
              autoFocus
              name="descripcion"
              fullWidth
              required
              label="Descripcion"
              variant="filled"
              onChange={handleChange}
              sx={{ ml: 0.5 }}
            />
            <TextField
              fullWidth
              required
              name="contacto"
              label="Contacto"
              variant="filled"
              sx={{ mr: 0.5 }}
            />
            <TextField
              name="telefono"
              fullWidth
              required
              label="Telefono"
              variant="filled"
              onChange={handleChange}
              sx={{ ml: 0.5 }}
            />

            <TextField
              name="email"
              fullWidth
              required
              label="E-mail"
              variant="filled"
              onChange={handleChange}
              sx={{ ml: 0.5 }}
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
              onClick={handleOpenCloseCreateAgru}
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
      </Modal>
    </>
  );
}

import { Box, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import TableProductos from "../components/TableProductos";
import { useState } from "react";

const Products = () => {
  const [openCreate, setOpenCreate] = useState(false);

  const handleOpenCloseCreate = () => {
    setOpenCreate(!openCreate);
  };
  const handleFilter = () => {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "100%",
        height: "90vh",
        pl: 1,
        pr: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mt: 1,
          mb: 1,
        }}
      >
        <Typography variant="h4">Productos</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenCloseCreate}
        >
          Nuevo Producto
        </Button>
      </Box>
      <Box sx={{ mt: 1, mb: 1 }}>
        <TextField
          id="filled-search"
          label="Buscar Producto por Nombre"
          type="search"
          variant="filled"
          name="lastName"
          onKeyUp={handleFilter}
          fullWidth
        />
      </Box>
      <TableProductos openCreate={openCreate} setOpenCreate={setOpenCreate} />
    </Box>
  );
};

export default Products;

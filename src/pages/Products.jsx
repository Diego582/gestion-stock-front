import { Box, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import TableProductos from "../components/TableProductos";

const Products = () => {
  const handleOpenCloseCreate = () => {};
  const handleFilter = () => {};

  return (
    <Box
      sx={{
        justifyContent: "space-between",
        width: "100%",
        height: "90vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
         
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
      <TextField
        id="filled-search"
        label="Buscar Producto por Nombre"
        type="search"
        variant="filled"
        name="lastName"
        onKeyUp={handleFilter}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TableProductos />
    </Box>
  );
};

export default Products;

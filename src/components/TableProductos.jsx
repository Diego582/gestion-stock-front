import {
  Box,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function TableProductos({ openCreate, setOpenCreate }) {
  /*   const data = useSelector((store) => store[dataStore][dataStore]); */

  const data = [
    {
      _id: "1",
      codigoBarras: 7791019172781,
      descripcion: "3ARROYOS CEREAL AZUCARADOS 240 GRS",
      categoria: "ALMACEN",
      agrupamiento: "category",
    },
    {
      _id: "2",
      codigoBarras: 7790310000540,
      descripcion: "3D MEGATUBE SAB.QUESO",
      categoria: "ALMACEN",
      agrupamiento: "agrupamiento",
    },
    {
      _id: "3",
      codigoBarras: 7790310007099,
      descripcion: "3D QUESO 116",
      categoria: "ALMACEN",
      agrupamiento: "agrupamiento",
    },
    {
      _id: "4",
      codigoBarras: 7790310007105,
      descripcion: "3D QUESO 165G",
      categoria: "ALMACEN",
      agrupamiento: "category",
    },
    {
      _id: "5",
      codigoBarras: 7793065000117,
      descripcion: "ACEITE COSTA DEL SOL GIRASOL",
      categoria: "ALMACEN",
      agrupamiento: "agrupamiento",
    },
    {
      _id: "6",
      codigoBarras: 1,
      descripcion: "descripcion",
      categoria: "ALMACEN",
      agrupamiento: "agrupamiento",
    },
    {
      _id: "7",
      codigoBarras: 1,
      descripcion: "descripcion",
      categoria: "ALMACEN",
      agrupamiento: "category",
    },
    {
      _id: "8",
      codigoBarras: 1,
      descripcion: "descripcion",
      categoria: "ALMACEN",
      agrupamiento: "agrupamiento",
    },
    {
      _id: "9",
      codigoBarras: 1,
      descripcion: "descripcion",
      categoria: "ALMACEN",
      agrupamiento: "agrupamiento",
    },
    {
      _id: "10",
      codigoBarras: 1,
      descripcion: "descripcion",
      categoria: "ALMACEN",
      agrupamiento: "category",
    },
    {
      _id: "11",
      codigoBarras: 1,
      descripcion: "descripcion",
      categoria: "ALMACEN",
      agrupamiento: "agrupamiento",
    },
    {
      _id: "12",
      codigoBarras: 1,
      descripcion: "descripcion",
      categoria: "ALMACEN",
      agrupamiento: "agrupamiento",
    },
  ];

  const columns = [
    {
      field: "codigoBarras",
      headerName: "Código deBarras",
    },
    {
      field: "descripcion",
      headerName: "Descripcion",
    },
    {
      field: "categoria",
      headerName: "Rubro",
    },
    {
      field: "agrupamiento",
      headerName: "Agrupamiento",
    },
    { field: "actions", headerName: "Acciones" },
  ];

  const [producto, setProducto] = useState({});

  const handleOpenCloseCreate = () => {
    setOpenCreate(!openCreate);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(producto, "producto");
  return (
    <>
      {data && data.length > 0 ? (
        <TableContainer sx={{ maxHeight: "70vh" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => {
                  return (
                    <TableCell key={index} sx={{ p: 2 }}>
                      {column.headerName}{" "}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow
                  sx={{
                    borderRadius: "10px",
                    backgroundColor:
                      index % 2 === 0 ? "rgba(157, 85, 82, 0.3)" : "white",
                  }}
                  key={index}
                >
                  {columns.map((column, colIndex) => {
                    if (column.field != "actions") {
                      return (
                        <TableCell key={colIndex} sx={{ p: 0, pl: 2 }}>
                          {item[column.field]}
                        </TableCell>
                      );
                    }
                  })}
                  <TableCell>
                    <Box>
                      <IconButton onClick={() => handleSelected(item, "Edit")}>
                        <EditIcon color="info" />
                      </IconButton>
                      <IconButton
                        onClick={() => handleSelected(item, "Delete")}
                      >
                        <DeleteIcon color="error" />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>No hay datos que mostrar</Typography>
      )}

      {/* ESTE ES EL MODAL DE CREATE */}
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

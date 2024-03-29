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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CreateProduct from "./CreateProduct";
import product_actions from "../store/actions/products";
import DeleteProduct from "./DeleteProduct";

const { read_products } = product_actions;

export default function TableProductos({ openCreate, setOpenCreate }) {
  /*   const data = useSelector((store) => store[dataStore][dataStore]); */
  const dispatch = useDispatch();
  const data = useSelector((store) => store.products.products);
  const [product, setProduct] = useState("");
  const [codigoBarras, setCodigoBarras] = useState({});
  const [openDelete, setOpenDelete] = useState(false);

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
    {
      field: "prices[0]",
      headerName: "Precio",
    },
    { field: "actions", headerName: "Acciones" },
  ];

  const [producto, setProducto] = useState({});
  const handleSelected = (product, option) => {
    setProduct(product);
    option === "Edit" ? handleOpenCloseEdit() : handleOpenCloseDelete();
  };

  const handleOpenCloseEdit = (product) => {};

  const handleOpenCloseDelete = () => {
    setOpenDelete(!openDelete);
  };

  useEffect(() => {
    dispatch(read_products());
  }, []);
  console.log(data, "data product");
 
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
                      {column.headerName}
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
                    console.log(item.prices[0].value, "prices[0].value");
                    if (column.field != "actions") {
                      return (
                        <TableCell key={colIndex} sx={{ p: 0, pl: 2 }}>
                          {item[column.field]}
                        </TableCell>
                      );
                    }
                    if (column.field == "prices[0].value") {
                      console.log(item, "item en for de columna");
                      return (
                        <TableCell key={colIndex} sx={{ p: 0, pl: 2 }}>
                          {item[column.field[0].value]}
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

      <CreateProduct openCreate={openCreate} setOpenCreate={setOpenCreate} />
      <DeleteProduct
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        product={product}
        setProduct={setProduct}
      />
    </>
  );
}

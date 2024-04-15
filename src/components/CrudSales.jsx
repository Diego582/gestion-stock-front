import { Box, TextField } from "@mui/material";
import { useState } from "react";

export default function CrudSales() {
  const [cantidad, setCantidad] = useState(1);


  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
     /*  dispatch(read_products(search))
        .then((res) => {
          if (res.payload.products) {
            Swal.fire({
              title: "Producto",
              html: res.payload.products.map(
                (each) =>
                  `<p>${each.descripcion}  - $ : ${each.prices[0].value}</p>`
              ),
              icon: "info",
            });
          }
        })
        .catch((e) => {}); */
    }
  };



  return (
    <Box sx={{ display: "flex" }}>
      <TextField
        id="filled-search"
        label="Codigo de Barra"
        variant="filled"
        name="codigoBarras"
        fullWidth
        sx={{ mr: 1, ml: 1 }}
      />
      <TextField
        id="filled-search"
        label="Cantidad"
        variant="filled"
        value={cantidad}
        sx={{ mr: 1, ml: 1 }}
      />
    </Box>
  );
}

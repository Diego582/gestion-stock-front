import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import product_actions from "../store/actions/products";
import comprobante_check_actions from "../store/actions/comprobanteCheck";

const { read_products } = product_actions;
const { add_comprobante_check } = comprobante_check_actions;
export default function CrudSales() {
  const [codigoBarras, setCodigoBarras] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const addComprobante = useSelector((store) => store.comprobantesCheck);
  const handleChange = () => {
    const item = {
      codigoBarras: codigoBarras,
      descripcion: descripcion,
      amount: amount,
      price: price,
    };
    console.log(item, "se cargo item");
    dispatch(add_comprobante_check(item));
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("hiciste enter");

      dispatch(read_products({ codigoBarras: codigoBarras }))
        .then((res) => {
          console.log(res.payload.products[0], "payload en handlekey");
          if (res.payload.products) {
            console.log("ingreso a los set", res.payload);
            setDescripcion(res.payload.products[0].descripcion);
            console.log(descripcion, "descripcion despues del set");
            setPrice(res.payload.products[0].prices[0].value);
            console.log(price, "price despues del set");

            handleChange();
          }
        })
        .catch((e) => {});
    }
  };

  console.log(addComprobante, "add comprobante");
  return (
    <Box sx={{ display: "flex" }}>
      <TextField
        id="filled-search"
        label="Codigo de Barra"
        variant="filled"
        onChange={(e) => setCodigoBarras(e.target.value)}
        value={codigoBarras}
        onKeyDown={(event) => handleEnterKey(event)}
        fullWidth
        sx={{ mr: 1, ml: 1 }}
      />
      <TextField
        id="filled-search"
        label="Cantidad"
        variant="filled"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        sx={{ mr: 1, ml: 1 }}
      />
    </Box>
  );
}

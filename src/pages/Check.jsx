import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import NavSales from "../components/NavSales";
import { useEffect, useState } from "react";
import TableSales from "../components/TableSales";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SaveIcon from "@mui/icons-material/Save";
import check_actions from "../store/actions/check";
import { useDispatch, useSelector } from "react-redux";
import SelectCustomer from "../components/SelectCustomer";
import comprobante_check_actions from "../store/actions/comprobanteCheck";
import product_sale_actions from "../store/actions/productSale";
import Swal from "sweetalert2";

const { destroy_comprobantes_check } = comprobante_check_actions;
const { read_checks, read_last_check } = check_actions;
const { create_product_sale } = product_sale_actions;

const Check = () => {
  const dispatch = useDispatch();

  const handleOpenCloseCreate = () => {};

  const [currentDate] = useState(new Date());
  const [total, setTotal] = useState(0);
  const [comprobante] = useState(0);
  const [idComprobantes, setIdComprobantes] = useState([]);

  const checks = useSelector((store) => store.checks.check);
  const comprobantes = useSelector(
    (store) => store.comprobantesCheck.compsChecks
  );
  const checkLast = useSelector((store) => store.checks.checkLast);
  const customer = useSelector((store) => store.customers.customer);

  const handlePostItem = () => {
    /*   comprobantes.map((item) => {
      dispatch(create_product_sale(item))
        .then((res) => {
          setIdComprobantes((prevArray) => [
            ...prevArray,
            res.payload.productSale._id,
          ]);
        })
        .catch((err) => {});
    });
    Swal.fire({
      title: "Confirma venta por Ticket?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
     
      if (result.isConfirmed) {
        handlePost()
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    }); */
  };

  const handlePost = () => {
    let itemPost = {
      puntoSales: 1,
      comprobante: comprobante == 0 ? 1 : comprobante,
      fecha: currentDate,
      products_id: idComprobantes,
      client_id: customer._id,
    };

    console.log(itemPost, "item que se carga");
    dispatch(destroy_comprobantes_check());
    setIdComprobantes([]);
  };

  useEffect(() => {
    dispatch(read_checks());
    dispatch(read_last_check());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "90vh",
      }}
    >
      <NavSales />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          mt: 1,
          mb: 1,
        }}
      >
        <Typography variant="h5">
          Ticket N°: 1-
          {comprobante && comprobante.comprobante
            ? comprobante.comprobante + 1
            : 1}
        </Typography>
        <Typography variant="h5">
          Fecha: {currentDate.getDate()}/{currentDate.getMonth() + 1}/
          {currentDate.getFullYear()}
        </Typography>
        <Typography variant="h5">Monto: $ {total.toFixed(2)}</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          {comprobantes && comprobantes.length > 0 ? (
            <>
              <IconButton>
                <LocalPrintshopIcon fontSize="large" />
              </IconButton>

              <IconButton onClick={handlePostItem}>
                <SaveIcon fontSize="large" />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton disabled>
                <LocalPrintshopIcon fontSize="large" />
              </IconButton>
              <IconButton disabled>
                <SaveIcon fontSize="large" />
              </IconButton>
            </>
          )}
        </Box>
      </Box>
      <Divider />
      <SelectCustomer />
      <Divider />
      <TableSales total={total} setTotal={setTotal} />
    </Box>
  );
};

export default Check;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_products = createAsyncThunk("read_products", async (obj) => {
  //callback que realiza la petición
  try {
    let data = await axios(apiUrl + "products?codigoBarras=" + obj.descripcion);

    return {
      products: data.data.response,
    };
  } catch (error) {
    return {
      products: [],
    };
  }
});

const read_product = createAsyncThunk("read_product", async (obj) => {
  //callback que realiza la petición
  try {
    let data = await axios(
      apiUrl + "products?codigoBarras=" + obj.codigoBarras
    );

    return {
      product: data.data.response,
    };
  } catch (error) {
    return {
      product: {},
    };
  }
});

/* const create_customer = createAsyncThunk(
  "create_customer", //nombre de la accion
  async (obj) => {
    //callback que realiza la petición
    try {
      let data = await axios.post(apiUrl + "customers", obj);
      return {
        customer: data.data.response,
        messages: [],
      };
    } catch (error) {
      return {
        customer: false,
        messages: error.response.data.messages || [error.response.data.message],
      };
    }
  }
); */

/* const destroy_customer = createAsyncThunk(
  "destroy_customer", //nombre de la accion
  async (obj) => {
    //callback que realiza la petición
    try {
      let data = await axios.delete(apiUrl + "customers/" + obj._id);

      return {
        customer: data.data.response,
        messages: [],
      };
    } catch (error) {
      return {
        customer: {},
        messages: error.response.data.messages || [error.response.data.message],
      };
    }
  }
); */

const product_actions = { read_products, read_product };
export default product_actions;

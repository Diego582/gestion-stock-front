import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_products_base = createAsyncThunk(
  "read_products_base",
  async (obj) => {
    //callback que realiza la petición
    try {
      let data = await axios(
        apiUrl + "productsbase?codigoBarras=" + obj.codigoBarras
      );

      return {
        productBase: data.data.response,
      };
    } catch (error) {
      return {
        productBase: {},
      };
    }
  }
);

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

const productBase_actions = { read_products_base };
export default productBase_actions;

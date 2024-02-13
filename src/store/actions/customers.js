import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_customers = createAsyncThunk("read_customers", async (obj) => {
  //callback que realiza la petición
  try {
    let data = await axios(apiUrl + "customers");

    return {
      customers: data.data.response,
    };
  } catch (error) {
    return {
      customers: [],
    };
  }
});

const create_customer = createAsyncThunk(
  "create_customer", //nombre de la accion
  async (obj) => {
    //callback que realiza la petición
    try {
      console.log(obj, "llego a create_customer");
      let data = await axios.post(apiUrl + "customers", obj);
      console.log(data, "data en create_customer");
      return {
        customer: data.data.response,
        messages: [],
      };
    } catch (error) {
      console.log(error, "error el createCustomer");
      return {
        customer: {},
        messages: error.response.data.messages || [error.response.data.message],
      };
    }
  }
);

const destroy_customer = createAsyncThunk(
  "destroy_customer", //nombre de la accion
  async (obj) => {
    //callback que realiza la petición
    try {
      console.log(obj, "destroy_customer");
      await axios.delete(apiUrl + "customers/" + obj._id);

      return {
        customer: {},
        messages: [],
      };
    } catch (error) {
      console.log(error, "error al borrar");
      return {
        customer: {},
        messages: error.response.data.messages || [error.response.data.message],
      };
    }
  }
);

const customer_actions = { read_customers, create_customer, destroy_customer };
export default customer_actions;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../utils/apiUrl";

const read_checks = createAsyncThunk("read_checks", async (obj) => {
  //callback que realiza la petición

  try {

    let data = await axios(apiUrl + "checks");
    console.log(data, 'data en actions')
    return {
      checks: data.data.response,
    };
  } catch (error) {

    return {
      checks: [],
    };
  }
});

const read_check = createAsyncThunk("read_check", async (obj) => {
  //callback que realiza la petición
  try {

    let data = await axios(
      apiUrl + "checks"
    );

    return {
      check: data.data.response,
    };
  } catch (error) {
    return {
      check: {},
    };
  }
});

const read_last_check = createAsyncThunk("read_last_check", async (obj) => {
  //callback que realiza la petición
  try {

    let data = await axios(
      apiUrl + "checks/last"
    );

    return {
      checkLast: data.data.response,
    };
  } catch (error) {
    return {
      check: {},
    };
  }
});


const create_check = createAsyncThunk(
  "create_check", //nombre de la accion
  async (obj) => {
    //callback que realiza la petición
    try {

      let data = await axios.post(apiUrl + "checks", obj);
      return {
        check: data.data.response,
        messages: [],
      };
    } catch (error) {
      return {
        check: false,
        messages: error.response.data.messages || [error.response.data.message],
      };
    }
  }
);

const update_check = createAsyncThunk(
  "update_check", //nombre de la accion
  async (obj) => {
    //callback que realiza la petición
    try {

      let data = await axios.put(apiUrl + "checks/" + obj._id, obj.data);
      return {
        check: data.data.response,
        messages: [],
      };
    } catch (error) {
      return {
        check: false,
        messages: error.response.data.messages || [error.response.data.message],
      };
    }
  }
);


const destroy_check = createAsyncThunk(
  "destroy_check", //nombre de la accion
  async (obj) => {
    //callback que realiza la petición
    try {
      let data = await axios.delete(apiUrl + "checks/" + obj._id);

      return {
        check: data.data.response,
        messages: [],
      };
    } catch (error) {
      return {
        customer: {},
        messages: error.response.data.messages || [error.response.data.message],
      };
    }
  }
);

const check_actions = {
  read_checks,
  read_check,
  create_check,
  destroy_check,
  update_check,
  read_last_check
};
export default check_actions;
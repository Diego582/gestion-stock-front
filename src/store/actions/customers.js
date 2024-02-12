import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_customers = createAsyncThunk("read_customers", async (obj) => {
  //callback que realiza la petición
  try {
    
    let data = await axios(
      apiUrl + "customers" 
    );

    return {
      customers: data.data.response,
    };
  } catch (error) {
  
    return {
      customers: [],
    };
  }
});

const customer_actions = { read_customers };
export default customer_actions;

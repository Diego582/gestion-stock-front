import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const signin = createAsyncThunk("signin", async (obj) => {
  try {
    console.log(obj.data, "obj en actions");
    console.log(apiUrl, "esto es api Url");
    let data = await axios.post(apiUrl + "auth/signin", obj.data);
    console.log(data, "data en actions");
    localStorage.setItem("token", data.data.response.token);
    return {
      user: data.data.response.user,
      token: data.data.response.token,
      messages: [],
    };
  } catch (error) {
    console.log(error, "error en signin");
    return {
      user: {},
      token: "",
      messages: error.response.data.messages || [error.response.data.message],
    };
  }
});

const signin_token = createAsyncThunk("signin_token", async () => {
  try {
    let token = localStorage.getItem("token");
    let authorization = { headers: { Authorization: `Bearer ${token}` } };
    let data = await axios.post(apiUrl + "auth/token", null, authorization);

    localStorage.setItem("token", data.data.response.token);
    return {
      user: data.data.response.user,
      token: data.data.response.token,
    };
  } catch (error) {
    return {
      user: {},
      token: "",
    };
  }
});

const signout = createAsyncThunk("signout", async () => {
  try {
    let token = localStorage.getItem("token");
    let authorization = { headers: { Authorization: `Bearer ${token}` } };
    let data = await axios.post(apiUrl + "auth/signout", null, authorization);
    localStorage.removeItem("token");
    return {
      user: {},
      token: "",
    };
  } catch (error) {
    return {
      user: {},
      token: "",
    };
  }
});

const update = createAsyncThunk("update", async ({ userId, newPassword }) => {
  try {
    let token = localStorage.getItem("token");
    let authorization = { headers: { Authorization: `Bearer ${token}` } };
    let data = await axios.post(
      `${apiUrl}auth/update/${userId}`,
      { newPassword },
      authorization
    );
    return {
      user: data.data.response.user,
      token: data.data.response.token,
      messages: [],
    };
  } catch (error) {
    return {
      user: {},
      token: "",
      messages: error.response.data.messages || [error.response.data.message],
    };
  }
});

const signup = createAsyncThunk();
const user_actions = { signin, signin_token, signout, signup, update };
export default user_actions;

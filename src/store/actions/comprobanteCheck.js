import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../utils/apiUrl";


const add_comprobante_check = createAsyncThunk(
    "add_comprobante_check", //nombre de la accion
    async (obj) => {
        //callback que realiza la petición
        try {
            console.log(obj, 'obj en comprante check')
            let data = await axios.post(apiUrl + "productssales", obj);
            return {
                compCheck: data.data.response,
                messages: [],
            };
        } catch (error) {
            return {
                compCheck: {},
                messages: error.response.data.messages || [error.response.data.message],
            };
        }
    }
);


const destroy_comprobante_check = createAsyncThunk(
    "destroy_comprobante_check", //nombre de la accion
    async (obj) => {
        //callback que realiza la petición
        try {
            console.log(obj, 'esto es obj que llego a delete')
            let data = await axios.delete(apiUrl + "productssales/" + obj._id);


            return {
                compCheck: data.data.response,
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

const destroy_comprobantes_check = createAsyncThunk(
    "destroy_comprobante_check", //nombre de la accion
    async () => {
        //callback que realiza la petición
        try {

            return {
                checks: [],
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


const comprobante_check_actions = {
    add_comprobante_check, destroy_comprobante_check, destroy_comprobante_check
};
export default comprobante_check_actions;
import Axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const axios = Axios.create({
    baseURL: "https://connections-api.goit.global/",
});
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const userLogin = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
    try {
        const {data} = await axios.post("/users/login", userData);
        // console.log("data: ", data);
        setAuthHeader(data.token);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const userLogout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout");
        setAuthHeader("");
        return;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const userRegister = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        const {data} = await axios.post("/users/signup", userData);
        // console.log("data: ", data);
        setAuthHeader(data.token);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const userRefresh = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        try {
            const state = thunkAPI.getState();
            const persistedToken = state.auth.token;
            setAuthHeader(persistedToken);
            const {data} = await axios.get("/users/current");
            // console.log("data: ", data);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
    {
        condition: (_, thunkAPI) => {
            const state = thunkAPI.getState();
            const persistedToken = state.auth.token;
            if (persistedToken) return true;
            return false;
        },
    }
);

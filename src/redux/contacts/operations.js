import {createAsyncThunk} from "@reduxjs/toolkit";
import {axios} from "../auth/operations";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) => {
    try {
        const {data} = await axios.get("/contacts");
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const {data} = await axios.post("/contacts", contact);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        const {data} = await axios.delete(`/contacts/${id}`);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
export const updateContact = createAsyncThunk("contacts/updateContact", async (id, thunkAPI) => {
    try {
        const {data} = await axios.delete(`/contacts/${id}`);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

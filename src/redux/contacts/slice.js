import {createSlice} from "@reduxjs/toolkit";
import {addContact, deleteContact, fetchContacts, updateContact} from "./operations";
import {userLogout} from "../auth/operations";

const handlePending = state => {
    state.error = null;
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};
const INITIAL_STATE = {items: null, loading: false, error: null};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)

            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(item => item.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, handleRejected)

            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items.unshift(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(updateContact.pending, handlePending)
            .addCase(updateContact.fulfilled, (state, {payload}) => {
                state.error = null;
                state.loading = false;
                state.items = state.items.map(item => (item.id === payload.id ? payload : item));
            })
            .addCase(updateContact.rejected, handleRejected)

            .addCase(userLogout.fulfilled, state => {
                return INITIAL_STATE;
            }),
});

export const contactsReducer = contactsSlice.reducer;

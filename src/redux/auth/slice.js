import {createSlice} from "@reduxjs/toolkit";
import {userLogin, userLogout, userRefresh, userRegister} from "./operations";

const handlePending = state => {
    state.error = null;
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};
const INITIAL_STATE = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
};
export const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    extraReducers: builder =>
        builder
            .addCase(userRegister.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(userLogin.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(userRefresh.pending, (state, action) => {
                state.error = null;
                state.loading = true;
                state.isRefreshing = true;
            })
            .addCase(userRefresh.rejected, (state, action) => {
                state.loading = false;
                state.isRefreshing = false;
                state.error = action.payload;
            })
            .addCase(userRefresh.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.isRefreshing = false;
                state.user = action.payload;
            })
            .addCase(userLogout.pending, (state, action) => {
                state.error = null;
            })
            .addCase(userLogout.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(userLogout.fulfilled, (state, action) => {
                return INITIAL_STATE;
            }),
});

export const authReducer = authSlice.reducer;

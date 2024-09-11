import {configureStore} from "@reduxjs/toolkit";

import {filtersReducer} from "./filters/operations";
import {contactsReducer} from "./contacts/slice";
import {authReducer} from "./auth/slice";

import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";
import localStorage from "redux-persist/es/storage";

const authConfig = {
    key: "auth",
    storage: localStorage,
    whitelist: ["token"],
};
export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: persistReducer(authConfig, authReducer),
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);

// src/App.jsx
import {lazy, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";

import "./App.css";
import Loader from "./Loader";

import {useDispatch, useSelector} from "react-redux";
import {userRefresh} from "../redux/auth/operations";
import {selectAuthIsRefreshing} from "../redux/auth/selectors";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import Layout from "./Layout";
import LavaLamp from "./LavaLamp";

const HomePage = lazy(() => import("../pages/HomePage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectAuthIsRefreshing);
    useEffect(() => {
        dispatch(userRefresh());
    }, [dispatch]);

    return isRefreshing ? (
        <Loader />
    ) : (
        <Layout>
            <LavaLamp />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} />} />
                <Route path="/login" element={<RestrictedRoute component={<LoginPage />} />} />
                <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
            </Routes>
            <Toaster position="top-center" />
        </Layout>
    );
};

export default App;

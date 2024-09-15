import css from "./Navigation.module.css";
import {useSelector} from "react-redux";
import {selectAuthIsLoggedIn, selectAuthUser} from "../redux/auth/selectors";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import {IoPerson, IoReorderThree} from "react-icons/io5";

import {RiContactsBook3Line} from "react-icons/ri";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import ModalMenu from "./ModalMenu";

const Navigation = () => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
    const user = useSelector(selectAuthUser);

    return (
        <nav className={css.navigation} id="main-nav">
            <div className={css.logo}>
                <NavLink to="/" className={css.link}>
                    <RiContactsBook3Line />
                    <span title="Return to home page">ContactsApp</span>
                </NavLink>
            </div>

            <div className={css["desctop-menu"]}>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}{" "}
                <div className={css.user} title="Profile">
                    <div className={css.avatar}>
                        <IoPerson />
                    </div>
                    Hello: {user.name ?? "Guest"}
                </div>
            </div>
            <ModalMenu />
        </nav>
    );
};
export default Navigation;

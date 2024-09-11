import {NavLink} from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
    return (
        <ul className={css.authnav}>
            <li>
                <NavLink to="/" className={({isActive}) => clsx(css.link, isActive && css.active)}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/register" className={({isActive}) => clsx(css.link, isActive && css.active)}>
                    Register
                </NavLink>
            </li>
            <li>
                <NavLink to="/login" className={({isActive}) => clsx(css.link, isActive && css.active)}>
                    Login
                </NavLink>
            </li>
        </ul>
    );
};
export default AuthNav;

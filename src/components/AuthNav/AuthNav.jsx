import {NavLink} from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import clsx from "clsx";

const AuthNav = () => {
    return (
        <ul className={css.menu}>
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

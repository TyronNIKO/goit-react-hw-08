import {NavLink} from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const AuthNav = () => {
    return (
        <ul className={css.menu}>
            <li>
                <NavLink to="/" className={({isActive}) => clsx(css.link, isActive && css.active)}>
                    <span title="Home page">Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/register" className={({isActive}) => clsx(css.link, isActive && css.active)}>
                    <span title="Sign up">Register</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/login" className={({isActive}) => clsx(css.link, isActive && css.active)}>
                    <span title="Sign in">Login</span>
                </NavLink>
            </li>
        </ul>
    );
};
export default AuthNav;

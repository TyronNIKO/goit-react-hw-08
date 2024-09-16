import {NavLink} from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import {IoPerson} from "react-icons/io5";

const AuthNav = () => {
    const openProfile = () => {
        toast.error("Тут нічого ще нема ;)");
    };
    return (
        <>
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
            <div className={css.user} title="Profile" onClick={openProfile}>
                <div className={css.avatar}>
                    <IoPerson />
                </div>
                <span>Hello: Guest</span>
            </div>
        </>
    );
};
export default AuthNav;

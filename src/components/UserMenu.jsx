import clsx from "clsx";
import css from "./Navigation.module.css";
import {NavLink} from "react-router-dom";
import {userLogout} from "../redux/auth/operations";
import {useDispatch} from "react-redux";

const UserMenu = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(userLogout());
    };
    return (
        <ul className={css.menu}>
            <li>
                <NavLink to="/contacts" className={({isActive}) => clsx(css.link, isActive && css.active)}>
                    <span title="Contacts page">Contacts</span>
                </NavLink>
            </li>
            <li>
                <button type="button" className={css.link} onClick={handleLogout}>
                    <span title="Logout">Logout</span>
                </button>
            </li>
        </ul>
    );
};
export default UserMenu;

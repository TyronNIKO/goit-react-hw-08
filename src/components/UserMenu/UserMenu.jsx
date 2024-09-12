import clsx from "clsx";
import css from "../Navigation/Navigation.module.css";
import {NavLink} from "react-router-dom";
import {userLogout} from "../../redux/auth/operations";
import {useDispatch} from "react-redux";

const UserMenu = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(userLogout());
    };
    return (
        <ul className={css.menu}>
            <li>
                <NavLink to="/" className={({isActive}) => clsx(css.link, isActive && css.active)}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/contacts" className={({isActive}) => clsx(css.link, isActive && css.active)}>
                    Contacts
                </NavLink>
            </li>
            <li>
                <button type="button" class={css.link} onClick={handleLogout}>
                    Logout
                </button>
            </li>
        </ul>
    );
};
export default UserMenu;

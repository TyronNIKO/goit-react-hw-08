import clsx from "clsx";
import css from "./UserMenu.module.css";
import {NavLink} from "react-router-dom";
import {userLogout} from "../../redux/auth/operations";
import {useDispatch} from "react-redux";

const UserMenu = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(userLogout());
    };
    return (
        <nav className={css.usermenu}>
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
                <button type="button" onClick={handleLogout}>
                    Logout
                </button>
            </li>
        </nav>
    );
};
export default UserMenu;

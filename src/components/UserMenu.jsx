import clsx from "clsx";
import css from "./Navigation.module.css";
import {NavLink} from "react-router-dom";
import {userLogout} from "../redux/auth/operations";
import {useDispatch, useSelector} from "react-redux";
import {IoPerson} from "react-icons/io5";
import {selectAuthUser} from "../redux/auth/selectors";

const UserMenu = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(userLogout());
    };

    const user = useSelector(selectAuthUser);

    const openProfile = () => {
        toast.error("Тут нічого ще нема ;)");
    };
    return (
        <>
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
            <div className={css.user} title="Profile" onClick={openProfile}>
                <div className={css.avatar}>
                    <IoPerson />
                </div>
                Hello: {user.name ?? "Guest"}
            </div>
        </>
    );
};
export default UserMenu;

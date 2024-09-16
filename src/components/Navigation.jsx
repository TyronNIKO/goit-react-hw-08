import css from "./Navigation.module.css";
import {useSelector} from "react-redux";
import {selectAuthIsLoggedIn} from "../redux/auth/selectors";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";

import {RiContactsBook3Line} from "react-icons/ri";
import {NavLink} from "react-router-dom";
import ModalMenu from "./ModalMenu";
import toast from "react-hot-toast";

const Navigation = () => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
    return (
        <nav className={css.navigation} id="main-nav">
            <div className={css.logo}>
                <NavLink to="/" className={css.link}>
                    <RiContactsBook3Line />
                    <span title="Return to home page">ContactsApp</span>
                </NavLink>
            </div>

            <div className={css["desctop-menu"]}>{isLoggedIn ? <UserMenu /> : <AuthNav />} </div>
            <ModalMenu />
        </nav>
    );
};
export default Navigation;

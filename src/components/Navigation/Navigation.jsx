import css from "./Navigation.module.css";
import {useSelector} from "react-redux";
import {selectAuthIsLoggedIn, selectAuthUser} from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import {FaUserAlt} from "react-icons/fa";

const Navigation = () => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
    const user = useSelector(selectAuthUser);
    // console.log(user);

    return (
        <nav className={css.navigation}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}{" "}
            <div className={css.user}>
                <div className={css.avatar}>
                    <FaUserAlt />
                </div>
                Hello: {user.name ?? "Guest"}
            </div>
        </nav>
    );
};
export default Navigation;

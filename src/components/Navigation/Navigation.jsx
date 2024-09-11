import css from "./Navigation.module.css";
import {useSelector} from "react-redux";
import {selectAuthIsLoggedIn, selectAuthUser} from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const Navigation = () => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
    const user = useSelector(selectAuthUser);
    // console.log(user);

    return (
        <nav className={css.navigation}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />} Hello: {user.name ?? "Guest"}
        </nav>
    );
};
export default Navigation;

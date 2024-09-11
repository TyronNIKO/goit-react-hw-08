import {Navigate} from "react-router-dom";
import {selectAuthIsLoggedIn} from "../redux/auth/selectors";
import {useSelector} from "react-redux";

const RestrictedRoute = ({component, redirectTo = "/contacts"}) => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};
export default RestrictedRoute;

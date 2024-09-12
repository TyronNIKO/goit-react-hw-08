import {useSelector} from "react-redux";
import Section from "../../components/Section";
import {selectAuthIsLoggedIn, selectAuthUser} from "../../redux/auth/selectors";
import css from "./HomePage.module.css";
import {NavLink} from "react-router-dom";
import clsx from "clsx";

const HomePage = () => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
    const user = useSelector(selectAuthUser);
    return (
        <Section name={css.section} container>
            <div className={css.homepage}>
                <div className={css.hero}>
                    <h1 className={css.h1}>
                        Welcome {user.name ?? "Guest"} to {user.name && "your"} contacts book app
                    </h1>
                    {!isLoggedIn && (
                        <ul className={css.menu}>
                            <li>
                                <NavLink to="/register" className={({isActive}) => clsx(css.link, isActive && css.active)}>
                                    Register
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" className={({isActive}) => clsx(css.link, isActive && css.active)}>
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </Section>
    );
};
export default HomePage;

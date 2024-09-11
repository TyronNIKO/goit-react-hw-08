import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

const AppBar = () => {
    return (
        <>
            <header className={css.appBar}>
                <div className="container">
                    <Navigation />
                </div>
            </header>
        </>
    );
};

export default AppBar;

import Navigation from "./Navigation";
import css from "./AppBar.module.css";

const AppBar = () => {
    return (
        <>
            <header className={css["app-bar"]}>
                <div className="container">
                    <Navigation />
                </div>
            </header>
        </>
    );
};

export default AppBar;

import css from "./LoginPage.module.css";
import Section from "../components/Section";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <Section name={css.section} container>
            <div className={css.login_page}>
                <div className={css.glass_box}>
                    <h2 className={css.title}>Login</h2>
                    <LoginForm />
                </div>
            </div>
        </Section>
    );
};
export default LoginPage;

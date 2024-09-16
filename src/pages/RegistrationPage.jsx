import css from "./RegistrationPage.module.css";
import Section from "../components/Section";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationPage = () => {
    return (
        <Section name={css.section} container>
            <div className={css.registration_page}>
                <div className={css.glass_box}>
                    <h2 className={css.title}>Registration</h2>
                    <RegistrationForm />
                </div>
            </div>
        </Section>
    );
};
export default RegistrationPage;

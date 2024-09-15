import {ErrorMessage, Field, Form, Formik} from "formik";
import css from "./LoginPage.module.css";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {userLogin} from "../redux/auth/operations";
import {selectAuthError} from "../redux/auth/selectors";
import Section from "../components/Section";
import {IoEye} from "react-icons/io5";
import {useState} from "react";

const ValidationSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string().min(7, "Too Short!").max(50, "Too Long!").required("Required"),
});

const LoginPage = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectAuthError);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };
    return (
        <Section name={css.login_page} container>
            <div className={css["glass-box"]}>
                <h2 className={css.title}>Login</h2>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={(values, {resetForm}) => {
                        console.log(values);
                        dispatch(userLogin(values));
                        resetForm();
                    }}
                    validationSchema={ValidationSchema}
                >
                    <Form className={css.form}>
                        <div className={css.field_group}>
                            <Field type="text" name="email" id="email" />
                        </div>
                        <ErrorMessage name="email" component="span" className={css["error-message"]} />
                        <div className={css.field_group}>
                            <Field type="password" name="password" id="password" />
                            <IoEye onClick={togglePasswordVisibility} className={css.toggle_pass} />
                        </div>
                        <ErrorMessage name="password" component="span" className={css["error-message"]} />
                        <button type="submit">Submit</button>
                        {error && <p className={css["error-message"]}>{error}</p>}
                    </Form>
                </Formik>
            </div>
        </Section>
    );
};
export default LoginPage;

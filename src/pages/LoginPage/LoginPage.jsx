import {ErrorMessage, Field, Form, Formik} from "formik";
import css from "./LoginPage.module.css";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {userLogin} from "../../redux/auth/operations";
import {selectAuthError, selectAuthIsLoggedIn} from "../../redux/auth/selectors";

const ValidationSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string().min(7, "Too Short!").max(50, "Too Long!").required("Required"),
});

const LoginPage = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectAuthError);
    return (
        <div className={css.registrationpage}>
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
                    <label htmlFor="email">Email</label>
                    <Field type="text" name="email" id="email" />
                    <ErrorMessage name="email" component="span" className={css["error-message"]} />
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" id="password" />
                    <ErrorMessage name="password" component="span" className={css["error-message"]} />
                    <button type="submit">Submit</button>
                    {error && <p>{error}</p>}
                </Form>
            </Formik>
        </div>
    );
};
export default LoginPage;

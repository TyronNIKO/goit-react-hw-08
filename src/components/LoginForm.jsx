import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {userLogin} from "../redux/auth/operations";
import {selectAuthError} from "../redux/auth/selectors";
import {IoEye} from "react-icons/io5";

import css from "./LoginForm.module.css";

const ValidationSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string().min(7, "Too Short!").max(50, "Too Long!").required("Required"),
});

const LoginForm = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectAuthError);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };
    return (
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
                    <Field type="text" name="email" id="email" placeholder="Your email" />
                </div>
                <ErrorMessage name="email" component="span" className={css.error_message} />
                <div className={css.field_group}>
                    <Field type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Your password" />
                    <IoEye onClick={togglePasswordVisibility} className={css.toggle_pass} />
                </div>
                <ErrorMessage name="password" component="span" className={css.error_message} />
                <button type="submit">Submit</button>
                {error && <p className={css.error_message}>{error}</p>}
            </Form>
        </Formik>
    );
};
export default LoginForm;

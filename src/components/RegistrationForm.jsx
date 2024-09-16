import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {userRegister} from "../redux/auth/operations";
import {selectAuthError, selectAuthIsLoggedIn} from "../redux/auth/selectors";
import {IoEye} from "react-icons/io5";
import {useState} from "react";
import css from "./RegistrationForm.module.css";

const ValidationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string()
        .email()
        .matches(/^(?!.*@[^,]*,)/)
        .required("Required"),
    password: Yup.string().min(7, "Too Short!").max(50, "Too Long!").required("Required"),
    password_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords doesn't match")
        .required("Confirm Password is required"),
});

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectAuthError);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2(prevState => !prevState);
    };
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
            }}
            onSubmit={(values, {resetForm}) => {
                dispatch(userRegister(values));
                resetForm();
            }}
            validationSchema={ValidationSchema}
        >
            <Form className={css.form}>
                <div className={css.field_group}>
                    <Field type="text" name="name" id="name" placeholder="Your name" />
                </div>
                <ErrorMessage name="name" component="span" className={css.error_message} />
                <div className={css.field_group}>
                    <Field type="text" name="email" id="email" placeholder="Your email" />
                </div>
                <ErrorMessage name="email" component="span" className={css.error_message} />
                <div className={css.field_group}>
                    <Field type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Your password" />
                    <IoEye onClick={togglePasswordVisibility} className={css.toggle_pass} />
                </div>
                <ErrorMessage name="password" component="span" className={css.error_message} />
                <div className={css.field_group}>
                    <Field type={showPassword2 ? "text" : "password"} name="password_confirmation" id="password_confirmation" placeholder="Repeat password" />
                    <IoEye onClick={togglePasswordVisibility2} className={css.toggle_pass} />
                </div>
                <ErrorMessage name="password_confirmation" component="span" className={css.error_message} />
                <button type="submit">Submit</button>
                {error && <p className={css.error_message}>{error}</p>}
            </Form>
        </Formik>
    );
};
export default RegistrationForm;

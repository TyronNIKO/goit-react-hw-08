import {useId} from "react";
import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from "yup";

import {useDispatch} from "react-redux";
import css from "./ContactForm.module.css";
import {addContact} from "../../redux/contacts/operations";

const initialValues = {
    contactName: "",
    contactPhone: "",
};
const FeedbackSchema = Yup.object().shape({
    contactName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    contactPhone: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
});

const ContactForm = () => {
    const idName = useId();
    const idPhone = useId();

    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(
            addContact({
                name: values.contactName,
                number: values.contactPhone,
            })
        );
        actions.resetForm();
    };

    return (
        <div className={css["contacts-form"]}>
            <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={FeedbackSchema}>
                <Form className={css.form}>
                    <div className={css["form-group"]}>
                        <label htmlFor={idName}>Name</label>
                        <Field type="text" name="contactName" id={idName} />
                        <ErrorMessage name="contactName" component="span" className={css["error-message"]} />
                    </div>
                    <div className={css["form-group"]}>
                        <label htmlFor={idPhone}>Number</label>
                        <Field type="text" name="contactPhone" id={idPhone} />
                        <ErrorMessage name="contactPhone" component="span" className={css["error-message"]} />
                    </div>
                    <button type="submit" className={css.btn}>
                        Add contact
                    </button>
                </Form>
            </Formik>
        </div>
    );
};
export default ContactForm;

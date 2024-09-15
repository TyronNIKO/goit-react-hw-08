import {useId} from "react";
import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";

import {useDispatch} from "react-redux";
import css from "./ContactForm.module.css";
import {addContact} from "../redux/contacts/operations";

const initialValues = {
    contactName: "",
    contactPhone: "",
};
const FeedbackSchema = Yup.object().shape({
    contactName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    contactPhone: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
});

const phoneNumberMask = ["+", /[1-9]/, /\d/, /\d/, " ", "(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];

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
            <h2 className={css.title}>Add new contact</h2>
            <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={FeedbackSchema}>
                <Form className={css.form}>
                    <div className={css["form-group"]}>
                        {/* <label htmlFor={idName}>Name</label> */}
                        <Field type="text" name="contactName" id={idName} placeholder="Enter name" />
                        <ErrorMessage name="contactName" component="span" className={css["error-message"]} />
                    </div>
                    <div className={css["form-group"]}>
                        {/* <label htmlFor={idPhone}>Number</label> */}
                        <Field name="contactPhone" id={idPhone}>
                            {({field}) => <MaskedInput {...field} type="text" mask={phoneNumberMask} placeholder="Enter phone number" className="text-input" />}
                        </Field>
                        <ErrorMessage name="contactPhone" component="span" className={css["error-message"]} />
                    </div>
                    <button type="submit" className={css.btn}>
                        Save
                    </button>
                </Form>
            </Formik>
        </div>
    );
};
export default ContactForm;

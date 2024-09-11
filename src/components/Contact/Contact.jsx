import {useDispatch} from "react-redux";

import css from "./Contact.module.css";
import {FaUser, FaPhoneAlt} from "react-icons/fa";
import {deleteContact} from "../../redux/contacts/operations";

const Contact = ({id, name, phone}) => {
    const dispatch = useDispatch();

    const handleOnDelete = contactId => {
        dispatch(deleteContact(contactId));
    };

    return (
        <div className={css.card}>
            <div className={css.info}>
                <div className={css.name}>
                    <FaUser />
                    <span>{name}</span>
                </div>
                <div className={css.phone}>
                    <FaPhoneAlt />
                    <span>{phone}</span>
                </div>
            </div>
            <button type="button" onClick={() => handleOnDelete(id)}>
                Delete
            </button>
        </div>
    );
};
export default Contact;

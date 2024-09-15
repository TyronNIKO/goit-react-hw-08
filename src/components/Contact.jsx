import {useDispatch} from "react-redux";

import css from "./Contact.module.css";
import {IoPerson, IoChatboxEllipsesOutline, IoCallOutline, IoCloseCircleOutline, IoVideocamOutline} from "react-icons/io5";

import {deleteContact} from "../redux/contacts/operations";

const Contact = ({id, name, phone}) => {
    const dispatch = useDispatch();

    const handleOnDelete = contactId => {
        dispatch(deleteContact(contactId));
    };

    return (
        <div className={css.card}>
            <div className={css.avatar}>
                <IoPerson />
            </div>
            <div className={css.info}>
                <div className={css.name}>
                    <span>{name}</span>
                </div>
                <div className={css.phone}>
                    <span>{phone}</span>
                </div>
            </div>
            <div className={css.btns}>
                <IoChatboxEllipsesOutline title="Message" />
                <IoCallOutline title="Call" />
                <IoVideocamOutline title="Video" />
                <button type="button" onClick={() => handleOnDelete(id)} title="Delete" className={css.delete}>
                    <IoCloseCircleOutline />
                </button>
            </div>
        </div>
    );
};
export default Contact;

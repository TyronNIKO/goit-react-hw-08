import {useDispatch} from "react-redux";

import css from "./Contact.module.css";
import {IoPerson, IoChatboxEllipsesOutline, IoCallOutline, IoCloseCircleOutline, IoVideocamOutline} from "react-icons/io5";

import {deleteContact} from "../redux/contacts/operations";
import toast from "react-hot-toast";

const Contact = ({id, name, phone}) => {
    const dispatch = useDispatch();

    const handleOnDelete = contactId => {
        dispatch(deleteContact(contactId));
        toast.success(`Contact deleted`);
    };
    const handleBtns = e => {
        e.preventDefault();
        toast.success("Тицнули на кнопку " + e.target.firstChild.innerHTML);
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
                <IoChatboxEllipsesOutline title="Message" onClick={handleBtns} />
                <IoCallOutline title="Call" onClick={handleBtns} />
                <IoVideocamOutline title="Video" onClick={handleBtns} />
                <button type="button" onClick={() => handleOnDelete(id)} title="Delete" className={css.delete}>
                    <IoCloseCircleOutline />
                </button>
            </div>
        </div>
    );
};
export default Contact;

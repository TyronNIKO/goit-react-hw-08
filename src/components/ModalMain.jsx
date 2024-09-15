import {useState} from "react";
import Modal from "react-modal";
import ContactForm from "./ContactForm";
import css from "./ModalMain.module.css";
import {IoAdd, IoClose} from "react-icons/io5";

Modal.setAppElement("#root");

const style = {
    base: css.ReactModal__Overlay,
    afterOpen: css["ReactModal__Overlay--after-open"],
    beforeClose: css["ReactModal__Overlay--before-close"],
};
const ModalMain = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {}

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal} className={css["modal-btn"]}>
                <div className={css["pseudo-btn"]}></div>
                <span>Add contact</span>
                <IoAdd />
            </button>

            <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} bodyOpenClassName={css["ReactModal__Body--open"]} overlayClassName={style} className={css.ReactModal__Content} contentLabel="Example Modal" afterOpen={css.ReactModal__Overlay}>
                <button type="button" className={css.close} onClick={closeModal}>
                    <IoClose />
                </button>
                <ContactForm />
            </Modal>
        </div>
    );
};
export default ModalMain;

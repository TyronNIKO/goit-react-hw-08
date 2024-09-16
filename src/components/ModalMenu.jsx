import {useState} from "react";
import Modal from "react-modal";
import css from "./ModalMenu.module.css";
import {IoReorderThree} from "react-icons/io5";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import {useSelector} from "react-redux";
import {selectAuthIsLoggedIn} from "../redux/auth/selectors";

Modal.setAppElement("#root");

const cssOverlay = {
    base: css.react_modal__overlay,
    afterOpen: css["react_modal__overlay--after-open"],
    beforeClose: css["react_modal__overlay--before-close"],
};
const cssContent = {
    base: css.react_modal__content,
    afterOpen: css["react_modal__content--after-open"],
    beforeClose: css["react_modal__content--before-close"],
};
const ModalMenu = () => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {}

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <IoReorderThree className={css["mobile-menu-toggle"]} title="Open mobile menu" onClick={openModal} />

            <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} bodyOpenClassName={css["ReactModal__Body--open"]} overlayClassName={cssOverlay} className={cssContent} contentLabel="MobileMenu Modal">
                <div className={css["mobile-menu"]} onClick={closeModal}>
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}{" "}
                </div>
            </Modal>
        </>
    );
};
export default ModalMenu;

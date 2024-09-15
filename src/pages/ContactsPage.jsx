import css from "./ContactsPage.module.css";

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import SearchBox from "../components/SearchBox";
import ErrorMsg from "../components/ErrorMsg";
import Loader from "../components/Loader";
import ContactList from "../components/ContactList";
import {selectContacts, selectError, selectLoading} from "../redux/contacts/selectors";
import {fetchContacts} from "../redux/contacts/operations";
import toast from "react-hot-toast";
import ModalMain from "../components/ModalMain";

const ContactsPage = () => {
    const contacts = useSelector(selectContacts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts())
            .unwrap()
            .then(() => {
                toast.success("Contacts loaded successfully");
            });
    }, [dispatch]);

    return (
        <div className={css.contactspage}>
            <Section name="search-section" container>
                <SearchBox />
            </Section>
            <Section name="contactlist-section" container>
                {error && <ErrorMsg />}
                {loading && <Loader />}
                {Array.isArray(contacts) && <ContactList />}
            </Section>
            <ModalMain />
        </div>
    );
};
export default ContactsPage;

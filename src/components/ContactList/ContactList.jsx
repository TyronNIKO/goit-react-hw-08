import {useSelector} from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {selectFilteredContacts} from "../../redux/filters/selectors";

const ContactList = () => {
    const showContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.list}>
            {showContacts.map(item => (
                <li key={item.id}>
                    <Contact id={item.id} name={item.name} phone={item.number} />
                </li>
            ))}
        </ul>
    );
};
export default ContactList;

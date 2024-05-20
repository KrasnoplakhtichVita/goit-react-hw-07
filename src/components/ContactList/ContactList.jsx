import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filterItems = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filterItems.map((value) => {
        return (
          <li key={value.id} className={css.item}>
            <Contact value={value} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

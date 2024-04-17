import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ values, onDelete }) => {
  return (
    <ul className={css.list}>
      {values.map((value) => {
        return (
          <li key={value.id} className={css.item}>
            <Contact value={value} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

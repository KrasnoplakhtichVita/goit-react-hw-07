import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";

const Contact = ({ value: { name, number, id }, onDelete }) => {
  // console.log(value);
  return (
    <div className={css.container}>
      <div>
        <p>
          <FaUser className={css.avatar} size="12px" />
          {name}
        </p>
        <p>
          <FaPhone className={css.avatar} size="12px" />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

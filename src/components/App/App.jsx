import { useEffect, useState } from "react";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <p>Please wait,loading...</p>}
      {error && <p>Oops,something wrong...</p>}
      <ContactList />
    </div>
  );
}

export default App;

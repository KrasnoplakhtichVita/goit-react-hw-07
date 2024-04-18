import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../../data/contactData.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contactsKey");
    return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contactsKey", JSON.stringify(contacts));
  });

  const filterValue = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const onDelete = (taskId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== taskId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList values={filterValue} onDelete={onDelete} />
    </div>
  );
}

export default App;

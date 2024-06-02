import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts, fetchContacts, deleteContact, selectContactsLoading, selectContactsError } from '../../redux/contactsSlice.js';
import Contact from '../Contact/Contact.jsx';
import { useEffect } from 'react';
import './ContactList.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} onDelete={handleDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
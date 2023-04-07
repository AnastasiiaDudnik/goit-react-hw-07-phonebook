import { useSelector } from 'react-redux';
import { List, ContactItem } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id}>
          <Contact contact={contact} />
        </ContactItem>
      ))}
    </List>
  );
};

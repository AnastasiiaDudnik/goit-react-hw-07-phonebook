import { useSelector } from 'react-redux';
import { List, ContactItem } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { selectContacts } from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectContacts);

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

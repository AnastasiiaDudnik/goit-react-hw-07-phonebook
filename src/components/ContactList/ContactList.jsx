import { List, ContactItem } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useContacts } from 'components/hooks/useContacts';

export const ContactList = () => {
  const visibleContacts = useContacts();

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

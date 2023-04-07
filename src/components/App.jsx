import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  return (
    <Layout>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {items && <p>JSON.stringify(items, null, 2)</p>}
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}

      <h2>Contacts</h2>
      {/* <Filter /> */}
      {/* <ContactList /> */}
    </Layout>
  );
};

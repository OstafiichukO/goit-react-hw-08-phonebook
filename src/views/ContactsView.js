import AddContact from 'components/AddContact';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Container from 'components/Container';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactsView = () => {
  return (
    <>
      <Container title={'Phonebook'}>
        <ToastContainer theme="colored" />
        <AddContact />
      </Container>
      <Container title={'Contacts'}>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};

export default ContactsView;

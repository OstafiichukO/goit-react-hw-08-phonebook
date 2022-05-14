import AddContact from 'components/AddContact';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Container from 'components/Container';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const ContactsView = () => {
  return (
    <div style={styles.wrapper}>
      <Container title={'Phonebook'}>
        <ToastContainer theme="colored" />
        <AddContact />
      </Container>
      <Container title={'Contacts'}>
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
};

export default ContactsView;

import {
  StyledForm,
  StyledLabel,
  StyledSpan,
  StyledInput,
  StyledButton,
} from './ContactForm.styled';
import Notiflix from 'notiflix';

import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from '../../redux/store';
// import { nanoid } from 'nanoid';
// import * as storage from '../../services/LocalStorage';

import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contactApi';

const ContactForm = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data } = useGetContactsQuery();
  const [addContact] = useCreateContactMutation();

  // useEffect(() => {
  //   storage.save('contacts', contacts);
  // }, [contacts]);

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handlleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'number':
        setPhone(event.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handlleSubmit = async event => {
    event.preventDefault();
    // const id = nanoid();
    // const duplicateName = contacts.reduce(
    //   (acc, contact) => [...acc, contact.name],
    //   []
    // );
    const duplicateName = await data.some(contact => {
      return contact.name.toLowerCase().includes(name.toLocaleLowerCase());
    });
    duplicateName
      ? Notiflix.Notify.info(`${name} is already in contacts`)
      : await addContact({ name, phone });
    reset();
  };

  return (
    <>
      <StyledForm onSubmit={handlleSubmit}>
        <StyledLabel>
          <StyledSpan>Name</StyledSpan>
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handlleChange}
            value={name}
          />
        </StyledLabel>
        <StyledLabel>
          <StyledSpan>Number</StyledSpan>
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handlleChange}
            value={phone}
          />
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </>
  );
};

export default ContactForm;

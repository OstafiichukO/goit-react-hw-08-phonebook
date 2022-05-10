import { useState } from 'react';
import { addContact } from 'redux/app/app-operations';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/app/app-selectors';
import {
  StyledForm,
  StyledLabel,
  StyledSpan,
  StyledInput,
  StyledButton,
} from './AddContact.styled';
import Notiflix from 'notiflix';

export const AddContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const saveContact = name => {
    const newContact = {
      name: name,
      number: number,
    };
    if (contacts.find(us => us.name === newContact.name)) {
      Notiflix.Notify.info(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
  };
  const hendleSubmit = e => {
    e.preventDefault();
    saveContact(name);
    setName('');
    setNumber('');
  };
  return (
    <>
      <StyledForm onSubmit={hendleSubmit}>
        <StyledLabel>
          <StyledSpan>Name</StyledSpan>
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={e => setName(e.currentTarget.value)}
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
            value={number}
            onChange={e => setNumber(e.currentTarget.value)}
          />
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </>
  );
};

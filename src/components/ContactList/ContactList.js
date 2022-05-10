import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterContacts } from 'redux/app/app-selectors';
import { removeContact, fetchContacts } from 'redux/app/app-operations';
import {
  StyledUl,
  StyledLi,
  StyledSpan,
  StyledButton,
} from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledUl>
      {contacts.map(({ id, name, number }) => (
        <StyledLi key={id}>
          <StyledSpan>
            &#9742; {name}: {number}
          </StyledSpan>
          <StyledButton
            type="button"
            id={id}
            onClick={() => dispatch(removeContact(id))}
          >
            Delete
          </StyledButton>
        </StyledLi>
      ))}
    </StyledUl>
  );
};
export default ContactList;

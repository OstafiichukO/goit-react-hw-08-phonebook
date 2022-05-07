import { StyledUl } from './ContactList.styled';
import ContactItem from './ContactItem';

import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactApi';
import BounceLoader from 'react-spinners/BounceLoader';
import { css } from '@emotion/react';

const ContactsList = () => {
  const { data, isFetching } = useGetContactsQuery();
  const filterValue = useSelector(state => state.filter.value);
  const filteredContacts = data?.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <>
      <StyledUl>
        {isFetching && !data && (
          <BounceLoader color="blue" css={override} size={100} />
        )}
        {filteredContacts &&
          filteredContacts.map(contact => {
            return <ContactItem key={contact.id} contact={contact} />;
          })}
      </StyledUl>
    </>
  );
};

export default ContactsList;

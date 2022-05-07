import { StyledLi, StyledSpan, StyledButton } from './ContactItem.styled';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
// import ClipLoader from 'react-spinners/ClipLoader';
// import { MdDeleteForever } from 'react-icons/md';
import { useDeleteContactMutation } from 'redux/contactApi';

const ContactItem = ({ contact }) => {
  const { id, name, phone } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeleteContact = () => {
    deleteContact(id);
    Notiflix.Notify.success(`Contact ${name} successfully deleted!`);
  };

  return (
    <StyledLi>
      <StyledSpan>
        &#9742; {name}: {phone}
      </StyledSpan>
      <StyledButton
        type="button"
        name={id}
        onClick={handleDeleteContact}
        disabled={isLoading}
      >
        Delete
        {/* {isLoading ? (
          <ClipLoader size="20px" color="aqua" />
        ) : (
          <MdDeleteForever color="#f69d3c" size={22} />
        )} */}
      </StyledButton>
    </StyledLi>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

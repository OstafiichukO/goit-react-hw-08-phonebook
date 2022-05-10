import {
  StyledLabel,
  StyledInput,
  StyledSpan,
  StyledForm,
} from './Filter.styled';

import { getFilter } from 'redux/app/app-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contacts-actions';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  // const debouncedOnChange = useDebouncedCallback(value => {
  //   dispatch(changeFilter(value));
  // }, 500);

  return (
    <StyledForm>
      <StyledLabel>
        <StyledSpan>Find contacts by name</StyledSpan>
        <StyledInput
          type="text"
          onChange={e => dispatch(filterContacts(e.currentTarget.value))}
          value={filter}
          placeholder="Search.."
        />
      </StyledLabel>
    </StyledForm>
  );
};

export default Filter;

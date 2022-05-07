import {
  StyledLabel,
  StyledInput,
  StyledSpan,
  StyledForm,
} from './Filter.styled';

import { useDebouncedCallback } from 'use-debounce';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const debouncedOnChange = useDebouncedCallback(value => {
    dispatch(changeFilter(value));
  }, 500);

  return (
    <StyledForm>
      <StyledLabel>
        <StyledSpan>Find contacts by name</StyledSpan>
        <StyledInput
          type="text"
          onChange={e => debouncedOnChange(e.target.value)}
        />
      </StyledLabel>
    </StyledForm>
  );
};

export default Filter;

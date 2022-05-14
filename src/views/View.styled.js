import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 5px;
  border: 2px solid #4267b2;
  border-radius: 7px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledSpan = styled.span`
  display: flex;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  font-family: italic;
`;

export const StyledInput = styled.input`
  padding: 5px;
  font-size: 18px;
  font-weight: 400;
  font-family: italic;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  width: 200px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 18px;
  font-weight: 400;
  font-family: italic;
  border-radius: 5px;
  color: white;
  background-color: #4267b2;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #898f9c;
    color: white;
  }
`;

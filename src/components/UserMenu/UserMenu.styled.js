import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const ImgEl = styled.img`
  margin-right: 4px;
`;
export const SpanEl = styled.span`
  font-weight: 700;
  margin-right: 12px;
  color: white;
  text-transform: capitalize;
  font-size: 20px;
`;

export const ButtonEl = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  padding: 5px;
  width: 100px;
  font-size: 18px;
  font-weight: 400;
  font-family: italic;
  border-radius: 5px;
  color: black;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #898f9c;
    color: white;
  }
`;

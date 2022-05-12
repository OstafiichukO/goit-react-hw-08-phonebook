import styled from '@emotion/styled';

export const StyledSection = styled.section`
  height: calc(var(--vh, 1vh) * 100);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(131, 150, 241, 1) 18%,
    rgba(14, 179, 213, 1) 100%
  );
  & h3 {
    font-size: 32px;
    text-align: center;
    margin: 20px 0 10px 0;
  }
`;

export const StyledDiv = styled.div`
  width: auto;
  margin: 0 auto;
`;

// import PropTypes from 'prop-types';
import { StyledSection, StyledDiv } from './Container.styled';

const Container = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledDiv>
        <h3>{title}</h3>
        {children}
      </StyledDiv>
    </StyledSection>
  );
};

export default Container;

// Container.propTypes = {
//   title: PropTypes.string.isRequired,
// };

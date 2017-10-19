// =============================================================================
// import
// =============================================================================

// react
import PropTypes from 'prop-types';

// styles
import styled, { css, keyframes } from 'styled-components';

// =============================================================================
// component
// =============================================================================

const bounceStyled = keyframes`
  0% { transform: scale(1.01); }
  100% { transform: scale(0.99); }
`;

const ButtonStyled = styled.button`
  border: none;
  outline: none;
  font-family: inherit;
  background-color: white;
  color: ${props => props.color};
  cursor: pointer;
  font-size: 2rem;
  padding: 1rem 2rem;
  border-radius: 999px;
  box-shadow: 0 0.5rem 1rem;
  transition: 500ms box-shadow;
  animation: ${bounceStyled} 250ms infinite alternate;
  &:hover {
    box-shadow: 0 0.5rem 2rem;
  }
  &::before {
    content: '👾 ';
  }
  ${props =>
    props.isDoingStuff &&
    css`
      background-color: rgba(0, 0, 0, 0.05);
      cursor: progress;
      &::before {
        content: '💅 ';
      }
    `};
`;

ButtonStyled.displayName = 'ButtonStyled';
ButtonStyled.propTypes = {
  color: PropTypes.string,
  size:  PropTypes.oneOf(['medium', 'large']),
};
ButtonStyled.defaultProps = {
  color: 'coral',
  size:  'medium',
};

// =============================================================================
// export
// =============================================================================

export default ButtonStyled;

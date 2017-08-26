// =============================================================================
// Import
// =============================================================================

// import glamorous from 'glamorous';
import styled from 'styled-components';

// =============================================================================
// Styles
// =============================================================================

// glamorous
// const Card = glamorous.div(
//   {
//     boxShadow: 'rgba(0,0,0,0.25) 0 2rem 4rem',
//   },
//   ({ marginBottom, width }) => ({ marginBottom, width })
// );

// styled-components
const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0 2rem 4rem;
  margin-bottom: ${props => props.marginBottom};
  width: ${props => props.width};
`;

Card.displayName = 'Card';
Card.defaultProps = {
  marginBottom: 0,
  width: '100%',
};

// =============================================================================
// Export
// =============================================================================

export default Card;

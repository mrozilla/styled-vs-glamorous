// =============================================================================
// Import
// =============================================================================

// import glamorous from 'glamorous';
import styled from 'styled-components';

// =============================================================================
// Styles
// =============================================================================

// glamorous
// const Section = glamorous.section(
//   {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   ({ minHeight, paddingTop, paddingBottom, marginTop, marginBottom }) => ({
//     minHeight,
//     paddingTop,
//     paddingBottom,
//     marginTop,
//     marginBottom,
//   })
// );

// styled-components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.minHeight};
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`;

Section.displayName = 'Section';
Section.defaultProps = {
  minHeight: '100vh',
  paddingTop: '0',
  paddingBottom: '0',
  marginTop: '0',
  marginBottom: '0',
};

// =============================================================================
// Export
// =============================================================================

export default Section;

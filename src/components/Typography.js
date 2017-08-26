// =============================================================================
// Import
// =============================================================================

// Styles
// import glamorous from 'glamorous';
import styled from 'styled-components';
import typography from '../styles/typography';

// =============================================================================
// Title
// =============================================================================

// glamorous
// export const Title = glamorous.h3(
//   {
//     lineHeight: '1em',
//     fontFamily: typography.font.family.headings,
//   },
//   ({ fontSize, fontWeight, color, textAlign, marginBottom, marginTop }) => ({
//     fontSize,
//     fontWeight,
//     color,
//     textAlign,
//     marginBottom,
//     marginTop,
//   })
// );

// styled-components
export const Title = styled.h3`
  line-height: 1em;
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  text-align: ${props => props.textAlign};
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
`;

Title.displayName = 'Title';
Title.defaultProps = {
  fontFamily: typography.font.family.headings,
  fontSize: '1rem',
  fontWeight: '900',
  color: 'inherit',
  textAlign: 'inherit',
  marginBottom: '0',
  marginTop: '0',
};

// =============================================================================
// Text
// =============================================================================

// glamorous
// export const Text = glamorous.p(
//   ({
//     lineHeight,
//     fontSize,
//     fontWeight,
//     color,
//     marginBottom,
//     opacity,
//     textAlign,
//     textTransform,
//     letterSpacing,
//   }) => ({
//     lineHeight,
//     fontSize,
//     fontWeight,
//     color,
//     marginBottom,
//     opacity,
//     textAlign,
//     textTransform,
//     letterSpacing,
//   })
// );

// styled-components
export const Text = styled.p`
  line-height: ${props => props.lineHeight};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
  opacity: ${props => props.opacty};
  text-align: ${props => props.textAlign};
  text-transform: ${props => props.textTransform};
  letter-spacing: ${props => props.letterSpacing};
`;

Text.displayName = 'Text';
Text.defaultProps = {
  lineHeight: '1.25rem',
  fontSize: 'inherit',
  fontWeight: '400',
  color: 'inherit',
  marginBottom: '0',
  opacity: '1',
  textAlign: 'inherit',
  textTransform: 'inherit',
  letterSpacing: '0',
  isTruncated: false,
};

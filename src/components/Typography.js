// =============================================================================
// Import
// =============================================================================

// Styles
import styled from 'styled-components';
import typography from '../styles/typography';

// =============================================================================
// Title
// =============================================================================

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

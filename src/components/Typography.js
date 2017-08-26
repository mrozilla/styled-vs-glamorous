// =============================================================================
// Import
// =============================================================================

// Styles
import styled from 'styled-components';
import { typography } from '../styles';

// =============================================================================
// Text
// =============================================================================

export const Text = styled.p`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  text-align: ${props => props.textAlign};
  text-transform: ${props => props.textTransform};
  letter-spacing: ${props => props.letterSpacing};
  color: ${props => props.color};
  opacity: ${props => props.opacity};
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
`;

Text.displayName = 'Text';
Text.defaultProps = {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: '400',
  lineHeight: '1.25rem',
  textAlign: 'inherit',
  textTransform: 'inherit',
  letterSpacing: '0',
  color: 'inherit',
  opacity: '1',
  marginBottom: '0',
  marginTop: '0',
};

// =============================================================================
// Title
// =============================================================================

export const Title = Text.withComponent('h1');

Title.displayName = 'Title';
Title.defaultProps = {
  ...Text.defaultProps,
  fontFamily: typography.font.family.headings,
  fontSize: '1rem',
  fontWeight: '900',
  lineHeight: '1rem',
};

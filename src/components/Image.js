// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from 'styled-components';
import { positionAbsolute } from '../styles/mixins';

// =============================================================================
// Styles
// =============================================================================

const ImageWrapper = styled.figure`
  position: relative;
  overflow: hidden;
  background-color: white;
  padding-bottom: ${props => props.ratio * 100}%;
  margin-bottom: ${props => props.marginBottom};
`;

ImageWrapper.displayName = 'ImageWrapper';
ImageWrapper.defaultProps = {
  ratio: 1,
  marginBottom: '0',
};

const ImageSource = styled.img`
  ${positionAbsolute};
  object-fit: cover;
  transition: 1s transform;
  &:hover {
    transform: scale(1.05);
  }
`;

ImageSource.displayName = 'ImageSource';

// =============================================================================
// Component
// =============================================================================

function Image({ src, ...rest }) {
  return (
    <ImageWrapper {...rest}>
      <ImageSource src={src} />
    </ImageWrapper>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

// =============================================================================
// Export
// =============================================================================

export default Image;

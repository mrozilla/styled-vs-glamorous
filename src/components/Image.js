// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
// import glamorous from 'glamorous';
import styled from 'styled-components';

// =============================================================================
// Styles
// =============================================================================

// glamorous
// const ImageWrapper = glamorous.figure(
//   {
//     position: 'relative',
//     overflow: 'hidden',
//     backgroundColor: 'white',
//   },
//   ({ ratio, marginBottom }) => ({
//     paddingBottom: `${ratio * 100}%`,
//     marginBottom,
//   })
// );

// styled-components
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

// glamorous
// const ImageSource = glamorous.img({
//   position: 'absolute',
//   top: '0',
//   right: '0',
//   bottom: '0',
//   left: '0',
//   width: '100%',
//   height: '100%',
//   // ...positionAbsolute(),
//   objectFit: 'cover',
//   transition: '1s transform',
//   '&:hover': {
//     transform: 'scale(1.05)',
//   },
// });

// styled-components
const ImageSource = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
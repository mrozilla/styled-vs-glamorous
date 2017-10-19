// =============================================================================
// import
// =============================================================================

// react
import PropTypes from 'prop-types';

// styles
import glamorous from 'glamorous';
import { css } from 'glamor';

// =============================================================================
// component
// =============================================================================

const bounceGlamorous = css.keyframes({
  '0%':   { transform: 'scale(1.01)' },
  '100%': { transform: 'scale(0.99)' },
});

const ButtonGlamorous = glamorous.button(
  {
    border:          'none',
    outline:         'none',
    fontFamily:      'inherit',
    backgroundColor: 'white',
    cursor:          'pointer',
    fontSize:        '2rem',
    padding:         '1rem 2rem',
    borderRadius:    '999px',
    boxShadow:       '0 0.5rem 1rem',
    transition:      '500ms box-shadow',
    animation:       `${bounceGlamorous} 250ms infinite alternate`,
    '&:hover':       {
      boxShadow: '0 0.5rem 2rem',
    },
    '&::before': {
      content: '💄 ',
    },
  },
  ({ color, size }) => ({
    color,
    padding: size === 'medium' ? '1rem 2rem' : '2rem 4rem',
  }),
  ({ isDoingStuff }) =>
    isDoingStuff && {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      cursor:          'progress',
      '&::before':     {
        content: '⏳ ',
      },
    },
);

ButtonGlamorous.displayName = 'ButtonGlamorous';
ButtonGlamorous.propTypes = {
  color: PropTypes.string,
  size:  PropTypes.oneOf(['medium', 'large']),
};
ButtonGlamorous.defaultProps = {
  color: 'coral',
  size:  'medium',
};

// =============================================================================
// export
// =============================================================================

export default ButtonGlamorous;

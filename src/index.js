// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import { injectGlobal } from 'styled-components';
import { normalize, reboot } from './styles';

// Screens
import AppScreen from './screens/AppScreen';

// =============================================================================
// Global styles
// =============================================================================

injectGlobal`${normalize}`;
injectGlobal`${reboot}`;

// =============================================================================
// Go!!!
// =============================================================================

ReactDOM.render(<AppScreen />, document.getElementById('root'));

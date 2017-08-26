// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import { injectGlobal } from 'styled-components';
import normalize from './styles/normalize';
import reboot from './styles/reboot';

// Screens
import AppScreen from './screens/AppScreen';

// Service worker
// import registerServiceWorker from './registerServiceWorker';

// =============================================================================
// Global styles
// =============================================================================

// glamorous
// normalize();
// reboot();

// styled-components
injectGlobal`${normalize}`;
injectGlobal`${reboot}`;

// =============================================================================
// Go!!!
// =============================================================================

ReactDOM.render(<AppScreen />, document.getElementById('root'));

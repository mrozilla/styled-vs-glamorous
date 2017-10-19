// =============================================================================
// import
// =============================================================================

import React from 'react';

// =============================================================================
// component
// =============================================================================

export default function Main({ children }) {
  return (
    <main
      style={{
        fontFamily:     'monospace',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-around',
        flexDirection:  'column',
        minHeight:      '100vh',
      }}
    >
      {children}
    </main>
  );
}

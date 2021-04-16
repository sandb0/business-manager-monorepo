import React from 'react';

import AppRoutes from './AppRoutes';
import GlobalStyles from './assets/StyleSheet/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <AppRoutes />

      <GlobalStyles />
    </>
  );
};

export default App;

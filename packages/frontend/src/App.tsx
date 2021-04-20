import React from 'react';
import { Provider } from 'react-redux';

import reduxStore from './libs/ReduxStore';

import AppRoutes from './AppRoutes';
import GlobalStyles from './assets/StyleSheet/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <Provider store={reduxStore}>
        <AppRoutes />

        <GlobalStyles />
      </Provider>
    </>
  );
};

export default App;

import React from 'react';
import Toast from 'react-native-toast-message';

import {Router} from './App/config/router';
import {StoreContext} from './App/core/StoreContext';

const App = () => {
  return (
    <StoreContext>
      <Router />
      <Toast />
    </StoreContext>
  );
};

export default App;

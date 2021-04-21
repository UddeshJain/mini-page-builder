import React from 'react';
import { Provider } from 'react-redux';

// importing redux store
import store from './redux/store';

// Importing global styling
import GlobalStyle from './global/GlobalStyle';

// pages
import Create from './containers/MainArea/MainArea';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Create />
  </Provider>
);

export default App;

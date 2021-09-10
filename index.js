/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ThemeProvider} from 'react-native-elements';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store/store';
const MyApp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MyApp);

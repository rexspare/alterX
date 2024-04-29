import React from 'react';
import { LogBox } from 'react-native';
import Toast from 'react-native-toast-message';
import Root from './src/navigation/root';

const App = () => {
  return (
    <>
      <Root />
      <Toast />
    </>
  )
}

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native", // Ignore this specific warning
]);

export default App

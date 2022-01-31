/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Providers  from './navigation/Index';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const App = () => {

  return (
    <Providers/>
  );
};



export default App;

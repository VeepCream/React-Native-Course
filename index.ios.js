/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
 
// สร้าง Component
const App = () => (
  <Header headerText={'Albums'} />
);

AppRegistry.registerComponent('AwesomeProject', () => App);

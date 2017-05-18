/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from './src/components/Home'

export default class App2 extends Component {
  render() {
    return (
        <Home/>
    );
  }
}


AppRegistry.registerComponent('App2', () => App2);

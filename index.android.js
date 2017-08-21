/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import SongListScreen from "./src/components/SongListScreen";
import Navigation from "./src/index";

/*
export default class HolySongRN extends Component {
  render() {
    return (
        <SongListScreen/>
    );
  }

}
 */

AppRegistry.registerComponent('HolySongRN', () => Navigation);

'user strict';
/**
 * index.ios.js
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import whereami from './app/components/whereami';

AppRegistry.registerComponent('whereami', () => whereami);

'use strict';
/**
 * button pure component
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import styles from './styles';

const Button = ({children, onPress}) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.label}>{children}</Text>
    </View>
  </TouchableHighlight>
)

export default Button;

Button.propTypes = {
    onPress: React.PropTypes.func.isRequired
};

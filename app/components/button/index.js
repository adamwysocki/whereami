'use strict';
/**
 * button component
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from './styles';

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.label}>{this.props.children}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = {
    onPress: React.PropTypes.func.isRequired
};

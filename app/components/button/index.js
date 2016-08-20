'user strict';
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


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000FF',
    height: 50,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  label: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '900'
  }
});

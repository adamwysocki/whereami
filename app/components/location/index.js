'use strict';
/**
 * currentLocation component
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Button from '../button';
import styles from './styles';

export default class Location extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{this.props.city}, {this.props.state} {this.props.country}</Text>
        <Button onPress={this.props.onPress}>RESET</Button>
      </View>
    );
  }
};

Location.propTypes = {
    city: React.PropTypes.string.isRequired,
    state: React.PropTypes.string.isRequired,
    country: React.PropTypes.string.isRequired,
    onPress: React.PropTypes.func.isRequired
};

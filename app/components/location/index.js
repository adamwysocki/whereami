'user strict';
/**
 * currentLocation component
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from '../button';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 70,
  },
  heading: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: '900',
    marginBottom: 70,
    fontSize: 22
  }
});

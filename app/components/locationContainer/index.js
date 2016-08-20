'user strict';
/**
 * locationContainer component
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Location from '../location';
import getBaseLocation from '../../api/getBaseLocation';

export default class LocationContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: 'unknown',
      state: 'unknown',
      country: 'unknown',
    };
  }

  componentDidMount() {

    getBaseLocation(this.props.latitude, this.props.longitude)
      .then(location => {
        if(location !== null) {
          this.setState({city: location.city});
          this.setState({state: location.state});
          this.setState({country: location.country});
        }
      });
  }

  render() {
    return (
      <Location
        city={this.state.city}
        state={this.state.state}
        country={this.state.country}
        onPress={this.props.onPress} />
    );
  }
}

LocationContainer.PropTypes = {
  onPress: React.PropTypes.func.isRequired,
  latitude: React.PropTypes.number.isRequired,
  longitude: React.PropTypes.number.isRequired
}

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

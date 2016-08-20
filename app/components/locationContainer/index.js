'use strict';
/**
 * locationContainer component
 * @flow
 */

import React, { Component } from 'react';

import Location from '../location';
import getBaseLocation from '../../api/getBaseLocation';
import styles from './styles';

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

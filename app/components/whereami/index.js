'use strict';
/**
 * whereami component
 * @flow
 *
 * Google Places API Key AIzaSyCsy8VXr84z-pKP54gTc6X-PZtbTOBCj8A
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

// import components
import Button from '../button';
import LocationContainer from '../locationContainer';
import styles from './styles';

export default class whereami extends Component {

  constructor(props) {
    super(props);
    // set some initial state
    this.state = {
      initialPosition: props.initialPosition || 'unknown',
      lastPosition: props.lastPosition || 'unknown',
      showing: props.showing || false,
      latitude: props.latitude || 0,
      longitude: props.longitude || 0
    };
  }

  componentDidMount() {
    // Load up the initial lat/lng
    this._updateLocation();
  }

  // configure and return the top nav bar
  _getTopNavBar() {
    return (
      <Navigator.NavigationBar
        routeMapper={{
          LeftButton: (route, navigator, index, navState) => { },
          RightButton: (route, navigator, index, navState) => { },
          Title: (route, navigator, index, navState) =>
            { return (<Text style={styles.title}>Where Am I?</Text>); },
        }}
        style={{backgroundColor: 'gray'}}
        />
    );
  }

  // use geolocation service to get lat/lng
  _updateLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({latitude: position.coords.latitude});
        this.setState({longitude: position.coords.longitude});
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  // toggle whether we're showing the location
  _wherePressed() {
    this.setState({showing: !this.state.showing});
  }

  render() {
    var visibleComponent;

    // if "showing" then show the location, otherwise initial view
    if(this.state.showing) {
      visibleComponent = <LocationContainer
                          latitude={this.state.latitude}
                          longitude={this.state.longitude}
                          onPress={this._wherePressed.bind(this)}/>
    } else {
      visibleComponent = <Button onPress={this._wherePressed.bind(this)}>WHERE AM I?</Button>
    }

    return (
      <Navigator
        initialRoute={{ title: 'Main Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <View style={styles.container}>
            {visibleComponent}
          </View>
        }
        navigationBar={this._getTopNavBar()}
      />
    );
  }
}

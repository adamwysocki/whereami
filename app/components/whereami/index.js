'user strict';
/**
 * whereami component
 * @flow
 * Google Places API Key AIzaSyCsy8VXr84z-pKP54gTc6X-PZtbTOBCj8A
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Button from '../button';
import LocationContainer from '../locationContainer';

export default class whereami extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      showing: false,
      latitude: 0,
      longitude: 0
    };
  }

  componentDidMount() {
    // Load up the initial lat/lng
    this._updateLocation();
  }

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

  _wherePressed() {
    this.setState({showing: !this.state.showing});
  }

  render() {
    var visibleComponent;

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
        navigationBar={
           <Navigator.NavigationBar
             routeMapper={{
               LeftButton: (route, navigator, index, navState) => { },
               RightButton: (route, navigator, index, navState) => { },
               Title: (route, navigator, index, navState) =>
                 { return (<Text style={styles.title}>Where Am I?</Text>); },
             }}
             style={{backgroundColor: 'gray'}}
           />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#ffffff',
    fontWeight: '900',
    marginTop: 10,
    fontSize: 18
  }
});

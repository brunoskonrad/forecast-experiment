/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import Forecast from './src/modules/forecast/components/forecast'
import OpenWeatherMap from './src/transport/open-weather-map'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

type Props = {}
export default class App extends Component<Props> {
  constructor() {
    super()

    this.state = {
      weather: null
    }
  }

  onSuccess = position => {
    const { latitude, longitude } = position.coords
    OpenWeatherMap.currentWeatherForGeolocation({
      lat: latitude,
      lon: longitude
    }).then(weather => {
      this.setState({ weather })
    })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.onSuccess)
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.weather && <Forecast weather={this.state.weather} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

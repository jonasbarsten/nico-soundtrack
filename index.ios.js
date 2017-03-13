import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import Location from './src/components/Location';
import Geolocation from './src/components/Geolocation';
import Sensors from './src/components/Sensors';

const App = () => {
  return (
      <View>
        <Header />
        <Location />
        <Geolocation />
        <Sensors />
      </View>
    );
};

AppRegistry.registerComponent('nico', () => App);
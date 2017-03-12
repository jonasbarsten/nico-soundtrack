import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import Location from './src/components/Location';
import GeolocationExample from './src/components/Geolocation';

const App = () => {
  return (
      <View>
        <Header />
        <Location />
        <GeolocationExample />
      </View>
    );
};

AppRegistry.registerComponent('nico', () => App);
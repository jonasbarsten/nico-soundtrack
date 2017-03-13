import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import Location from './src/components/Location';
import Geolocation from './src/components/Geolocation';
import StepCounter from './src/components/StepCounter';

const App = () => {
  return (
      <View>
        <Header />
        <Location />
        <Geolocation />
        <StepCounter />
      </View>
    );
};

AppRegistry.registerComponent('nico', () => App);
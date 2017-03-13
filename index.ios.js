import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import Location from './src/components/Location';
import Geolocation from './src/components/Geolocation';
// import StepCounter from './src/components/StepCounter';
import SingleSound from './src/components/SingleSound';

const App = () => {
  return (
      <View>
        <Header />
        <Location />
        <Geolocation />

        <SingleSound file="kick_1.wav" />
        <SingleSound file="snare_1.wav" />
      </View>
    );
};

AppRegistry.registerComponent('nico', () => App);
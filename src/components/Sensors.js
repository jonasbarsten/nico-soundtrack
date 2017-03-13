import React, { Component } from 'react';
import { View, Text, DeviceEventEmitter, Alert } from 'react-native';
// import NM from 'NativeModules';
import Pedometer from 'react-native-pedometer';

class Sensors extends Component {

	componentDidMount() {

		console.log(Pedometer);
		// Alert.alert(
		// 	'Alert Title',
		// 	'My Alert Msg',
		// 	[
		// 		{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
		// 		{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
		// 		{text: 'OK', onPress: () => console.log('OK Pressed')},
		// 	],
		// 	{ cancelable: false }
		// );
		// console.log(Gyroscope);
		// SensorManager.startGyroscope(100);
  //   	DeviceEventEmitter.addListener('Gyroscope', function (data) {
  //     		console.log(data);
		// });
	}

	render () {
		return (
			<View>
				<Text>Sensorzzzzz</Text>
			</View>
		);
	}
}

export default Sensors;
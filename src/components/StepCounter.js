import React, { Component } from 'react';
import { View, Text, DeviceEventEmitter, StyleSheet } from 'react-native';
// import NM from 'NativeModules';
import Pedometer from 'react-native-pedometer';

class StepCounter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			startDate: null,
			endDate: null,
			numberOfSteps: 0,
			distance: 0,
			floorsAscended: 0,
			floorsDescended: 0,
			currentPace: 0,
			currentCadence: 0,
		}
	}

	componentDidMount() {
		this.startUpdates.bind(this);
	}

	startUpdates() {
		const today = new Date();
		today.setHours(0,0,0,0);

		Pedometer.startPedometerUpdatesFromDate(today.toTime(), (motionData) => {
			console.log("motionData: " + motionData);
			this.setState(motionData);
		});
	}

	render () {

		return (
			<View>
				<Text>Step Counter when available</Text>
			</View>
		);
	}
}

export default StepCounter;
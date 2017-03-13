import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';

class SingleSound extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			thisSound: {},
			isPlaying: false
		}
	}

	componentDidMount() {
		// Enable playback in silence mode (iOS only) 
		Sound.setCategory('Playback');

		const loops = this.props.loops ? this.props.loops : 0;	

		var thisSound = new Sound(this.props.file, Sound.MAIN_BUNDLE, (error) => {

			if (error) {
				console.log('failed to load the sound', error);
				return;
			} 

			thisSound.setNumberOfLoops(loops);

			this.setState({
				thisSound: thisSound,
				loading: false
			});
		});
	}

	play () {

		this.setState({
			isPlaying: true
		});

		this.state.thisSound.play((success) => {
			if (success) {
				this.setState({
					isPlaying: false
				});
			} else {
				console.log('playback failed due to audio decoding errors');
				this.setState({
					isPlaying: false
				});
			}
		});
	}

	render () {

		if (this.state.loading) {
			return (
				<Text>Loading ...</Text>
			);
		}

		return (
			<View>	
				<TouchableOpacity onPress={this.play.bind(this)}>
					<Text style={{margin: 30}}>{this.props.file}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default SingleSound;
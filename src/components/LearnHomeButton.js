import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const LearnHomeButton = (props) => {
	const guide = require('../../assets/icons/help-bubble.png');
	const videos = require('../../assets/icons/play-button.png');
	let icon;

	switch (props.icon) {
		case 'guide':
			icon = guide;
			break;
		case 'videos':
			icon = videos;
			break;
	}

	return (
		<TouchableOpacity
			style={LearnHomeButtonStyle.container}
			onPress={props.onPress}
		>
			<View style={LearnHomeButtonStyle.button}>
				<View style={LearnHomeButtonStyle.innerContainer}>
					<Image style={LearnHomeButtonStyle.icon} source={icon} />
					<Text style={LearnHomeButtonStyle.title}>{props.title}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const LearnHomeButtonStyle = StyleSheet.create({
	container: {
		width: '73%',
		height: '13.5%',
		margin: 70,
	},
	button: {
		width: '100%',
		height: 180,
		justifyContent: 'center',
		backgroundColor: '#B7D381',
		borderRadius: 8,
		elevation: 6,
	},
	innerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '80%',
		marginLeft: '10%',
	},
	title: {
		fontFamily: 'ArialBold',
		fontSize: 27,
		color: '#174A5B',
		marginLeft: 40,
	},
	icon: {
		width: 64,
		height: 64,
	},
});

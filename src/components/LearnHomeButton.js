import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const LearnHomeButton = (props) => {
	const guide = require('../../assets/icons/help-book.png');
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
					<Image style={LearnHomeButtonStyle.icon} source={icon} />
					<Text style={LearnHomeButtonStyle.title}>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const LearnHomeButtonStyle = StyleSheet.create({
	container: {
		width: '73%',
		marginTop: 60
	},
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 180,
		justifyContent: 'center',
		backgroundColor: '#B7D381',
		borderWidth: 5,
		borderColor: '#AACF63',
		borderRadius: 12,
		elevation: 9,
	},
	title: {
		fontFamily: 'ArialBold',
		fontSize: 28,
		color: '#174A5B',
		marginLeft: 40,
		width: '65%'
	},
	icon: {
		width: 70,
		height: 70,
    transform: [{ scale: 0.85 }],
	},
});

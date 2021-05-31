import React, { useState } from 'react';
import {
	View,
	TouchableOpacity,
	Button,
	StyleSheet,
	Image,
} from 'react-native';

//Components
import { HomeScreenButton } from '../components/HomeScreenButton';
import { BrightTitle } from '../components/BrightTitle';
import { UserMenu } from '../components/UserMenu/UserMenu';
import { UserButton } from '../components/UserMenu/UserButton';

//Helpers
import { getData } from '../utils/helpers';

const HomeScreen = ({ navigation }) => {
	//Boolean to toggle the view which contains the user
	const [showUserMenu, setShowUserMenu] = useState(false);

	//Checking our data when loading the HomeScreen, just for testing purposes
	getData().then((data) => console.log(data));

	return (
		<View style={HomeScreenStyles.container}>
			<UserButton setShowUserMenu={setShowUserMenu} />
			<BrightTitle />
			{showUserMenu ? (
				<UserMenu navigation={navigation} setShowUserMenu={setShowUserMenu} />
			) : null}
			<HomeScreenButton
				icon={'add'}
				title={'ADD NEW'}
				onPress={() => navigation.navigate('CustomerFormScreen')}
			/>
			<HomeScreenButton icon={'search'} title={'SEARCH'} onPress={() => navigation.navigate('LearnVideoPlayerScreen')} />
			<HomeScreenButton icon={'upload'} title={'UPLOAD'}/>
			<HomeScreenButton
				icon={'school'}
				title={'LEARN'}
				onPress={() => navigation.navigate('LearnHomeScreen')} />
		</View>
	);
};

const HomeScreenStyles = StyleSheet.create({
	container: {
		backgroundColor: '#174A5B',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'ArialBold',
	},
	userButton: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
});

export default HomeScreen;

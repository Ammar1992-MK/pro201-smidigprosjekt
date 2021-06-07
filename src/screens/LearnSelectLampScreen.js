import React, {useState, useEffect} from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Text,
	Image,
} from 'react-native';

import { NavigationBar } from '../components/NavigationBar/NavigationBar';
import CardSmall from '../components/Cards/CardSmall';
import { BackButton } from '../components/BackButton';

const LearnSelectLampScreen = ({navigation, route}) => {

    return (
        <>
            <NavigationBar icon={true} title="LEARN" navigation={navigation}/>
            <View style={LearnSelectScreenStyles.container}>
            <View style={LearnSelectScreenStyles.boxContainer}>
                <View style={LearnSelectScreenStyles.rows}>
                    <TouchableOpacity
                        style={LearnSelectScreenStyles.lampContainer}
                        onPress={() => {
                            navigation.navigate('LampVideosScreen', {lamp: "Sunbell Smart"});
                        }}>
                        <Text style={LearnSelectScreenStyles.text}>SUNBELL</Text>
                        <Image
                            style={LearnSelectScreenStyles.image}
                            source={require("../../assets/product-images/sunbell1.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={LearnSelectScreenStyles.lampContainer}
                        onPress={() => navigation.navigate('LampVideosScreen', {lamp: "SunTurtle"})}>
                        <Text style={LearnSelectScreenStyles.text}>SUNTURTLE</Text>
                        <Image
                            style={LearnSelectScreenStyles.image}
                            source={require("../../assets/product-images/sunturtle2.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View style={LearnSelectScreenStyles.rows}>
                    <TouchableOpacity
                        style={LearnSelectScreenStyles.lampContainer}
                        onPress={() => navigation.navigate('LampVideosScreen', {lamp: "Move Smart"})}>
                        <Text style={LearnSelectScreenStyles.text}>MOVE SMART</Text>
                        <Image
                            style={LearnSelectScreenStyles.image}
                            source={require("../../assets/product-images/movesmart3.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={LearnSelectScreenStyles.lampContainer}
                        onPress={() => navigation.navigate('LampVideosScreen', {lamp: "Start+"})}>
                        <Text style={LearnSelectScreenStyles.text}>START+</Text>
                        <Image
                            style={LearnSelectScreenStyles.image}
                            source={require("../../assets/product-images/start4.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
                <View style={LearnSelectScreenStyles.backButton}>
                    <BackButton onPress={() => navigation.navigate('LearnHomeScreen')}/>
                </View>
            </View>
            </>
    )};


const LearnSelectScreenStyles = StyleSheet.create({
	container: {
		backgroundColor: '#F3F8E9',

		flex: 1,
		fontFamily: 'ArialBold',
	},
	boxContainer: {
		backgroundColor: '#F3F8E9',

		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: '3%',
	},
	rows: {
		flexDirection: 'row',
	},
	lampContainer: {
		backgroundColor: '#fff',

		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#fff',
		borderRadius: 15,
		width: '35%',
		height: '83%',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 10,
		marginLeft: 40,
		marginRight: 40,
	},
	text: {
		backgroundColor: '#174A5B',
		color: '#fff',
		fontSize: 25,
		textAlignVertical: 'bottom',
		textAlign: 'center',
		height: '17%',
		paddingHorizontal: 20,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		alignSelf: 'stretch',
	},
	image: {
		justifyContent: 'center',
		alignItems: 'center',
		resizeMode: 'cover',
		marginTop: 20,
		marginBottom: 10,
	},
	backButton: {
		justifyContent: 'flex-start',
		alignContent: 'center',
		marginLeft: 20,
		bottom: '5%',
	},
});

export default LearnSelectLampScreen;

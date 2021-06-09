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
import { BackButton } from '../components/BackButton';

const LearnSelectLampScreen = ({navigation, route}) => {

    return (
        <>
            <NavigationBar icon={true} title="REPAIR GUIDE" navigation={navigation}/>
            <View style={styles.container}>
            <View style={styles.boxContainer}>
                <View style={styles.rows}>
                    <TouchableOpacity
                        style={styles.lampContainer}
                        onPress={() => {
                            navigation.navigate('LampVideosScreen', {lamp: "SunBell Smart"});
                        }}>
                        <Text style={styles.text}>SUNBELL</Text>
                        <Image
                            style={styles.image}
                            source={require("../../assets/product-images/sunbell1.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.lampContainer}
                        onPress={() => navigation.navigate('LampVideosScreen', {lamp: "SunTurtle"})}>
                        <Text style={styles.text}>SUNTURTLE</Text>
                        <Image
                            style={styles.image}
                            source={require("../../assets/product-images/sunturtle2.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.rows}>
                    <TouchableOpacity
                        style={styles.lampContainer}
                        onPress={() => navigation.navigate('LampVideosScreen', {lamp: "Move Smart"})}>
                        <Text style={styles.text}>MOVE SMART</Text>
                        <Image
                            style={styles.image}
                            source={require("../../assets/product-images/movesmart3.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.lampContainer}
                        onPress={() => navigation.navigate('LampVideosScreen', {lamp: "Start+"})}>
                        <Text style={styles.text}>START+</Text>
                        <Image
                            style={styles.image}
                            source={require("../../assets/product-images/start4.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
                <View style={styles.backButton}>
                    <BackButton onPress={() => navigation.navigate('LearnHomeScreen')} buttonStyle="outlined"/>
                </View>
            </View>
            </>
    )};


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F3F8E9',
		flex: 1,
		paddingTop: 20
	},
	boxContainer: {
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
		borderRadius: 12,
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
		textAlign: 'center',
		height: '17%',
    paddingVertical: 4,
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12,
		alignSelf: 'stretch',
		fontFamily: 'ArialBold'
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
		marginLeft: 40,
		bottom: -10
	},
});

export default LearnSelectLampScreen;

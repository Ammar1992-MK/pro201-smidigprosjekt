import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { NavigationBar } from '../components/NavigationBar/NavigationBar';
import CardSmall from '../components/Cards/CardSmall';
import LongButton from '../components/LongButton';
import {BackButton} from '../components/BackButton';

//Async Storage
import { addNewRepair } from '../utils/helpers';

const FilledInputField = ({ title, textInput }) => {
	const styles = StyleSheet.create({
		input: {
			backgroundColor: '#ffffff',
			fontSize: 28,
			borderWidth: 3,
			borderColor: '#00966C',
			borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
			color: '#2C2A29',
		},
		inputHeaders: {
			  color: '#174A5B',
        marginTop: 20,
        fontSize: 28,
        marginBottom: 4,
				fontFamily: 'Arial',
		},
	});

	return (
		<View>
			<Text style={styles.inputHeaders}>{title}</Text>
			<TextInput style={styles.input} value={textInput} editable={false} />
		</View>
	);
};

//COLLECTS USERDATA FROM  PREVIOUS SCREEN
const CustomerFormSummaryScreen = ({ navigation, route }) => {
	const [userData, setUserData] = useState({});

	const { customerName, phoneNumber, serialNumber, lamp } = route.params;

	useEffect(() => {
		setUserData({ customerName, phoneNumber, serialNumber, lamp });
	}, []);

	return (
		<>
			<NavigationBar
				title="NEW REPAIR"
				navigation={navigation}
				progressbar={true}
				step={1.5}
			/>
			<View styles={styles.container}>
				<View style={styles.summaryContainer}>
					<CardSmall lampName={lamp} />
					<View style={styles.inputFields}>
						<FilledInputField
							textInput={userData.phoneNumber ? userData.phoneNumber : ' -'}
							title={'Phone Number'}
						/>
						<FilledInputField
							textInput={userData.serialNumber ? userData.serialNumber : ' -'}
							title={'Serial Number'}
						/>
						<FilledInputField
							textInput={userData.customerName ? userData.customerName : ' -'}
							title={'Name'}
						/>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<LongButton
						icon="repair"
						textColor="primary_teal"
						backgroundColor="primary_green"
						title="START REPAIR"
						onPress={async () => {
							await addNewRepair(userData);
							navigation.navigate('StartRepairScreen', { data: userData });
						}}
					/>
					<LongButton
						icon="saveWhite"
						textColor="white"
						backgroundColor="primary_teal"
						title="SAVE"
						onPress={async () => {
						navigation.navigate('HomeScreen', { data: userData });
						}}
					/>
				</View>
				<View style={styles.navButtons}>
          <BackButton onPress={() =>  navigation.navigate('CustomerFormScreen')} buttonStyle={"outlined"}/>
        </View>
			</View>
		</>
	);
};

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center'
		},
		summaryContainer: {
			backgroundColor: '#B7D38135',
			flexDirection: 'row',
			paddingBottom: 30,
			paddingTop: 16,
		},
		inputFields: {
			flexDirection: 'column',
			width: '45%',
			marginLeft: 10
		},
		buttonContainer: {
			backgroundColor: '#B7D38135',
			alignItems: 'center',
			height: '50%'
		},
		navButtons: {
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignContent: 'center',
			width: '90%',
			position: 'absolute',
			bottom: 90,
			marginLeft: '5%',
		}
	});

export default CustomerFormSummaryScreen;

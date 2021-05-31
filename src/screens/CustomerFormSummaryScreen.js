import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { NavigationBar } from '../components/NavigationBar/NavigationBar';
import CardSmall from '../components/Cards/CardSmall';
import LongButton from '../components/LongButton';

//Async Storage
import { addNewRepair } from '../utils/helpers';

const FilledInputField = ({ title, textInput }) => {
	const styles = StyleSheet.create({
		input: {
			backgroundColor: '#ffffff',
			fontSize: 30,
			borderWidth: 3,
			borderColor: '#00966C',
			borderRadius: 10,
			color: '#2C2A29',
			paddingLeft: 10,
		},
		inputHeaders: {
			color: '#174A5B',
			marginTop: '5%',
			fontSize: 34,
		},
	});

	return (
		<View>
			<Text style={styles.inputHeaders}>{title}</Text>
			<TextInput style={styles.input} value={textInput} editable={false} />
		</View>
	);
};
//textInput er "objektet" med all informasjonen som brukeren fylte inn i formen på forrige skjerm
//Tenkte at vi kan gi disse verdiene til <FilledInputField />, også gjøre det umulige å redigere på de
//Vi må vel sjekke etter internett her
// Hvis bruker velger å trykke på start repair må de sendes videre til neste skjerm, hvis de trykker save må vi lagre informasjonen lokalt

const CustomerFormSummaryScreen = ({ navigation, route }) => {
	const [userData, setUserData] = useState({});

	const { customerName, phoneNumber, serialNumber, lamp } = route.params;

	useEffect(() => {
		setUserData({ customerName, phoneNumber, serialNumber, lamp });
	}, []);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		summaryContainer: {
			flexDirection: 'row',
			marginBottom: 30,
		},
		inputFields: {
			flexDirection: 'column',
			width: '50%',
		},
		buttonContainer: {
			height: '100%',
			alignItems: 'center',
		},
	});

	return (
		<>
			<NavigationBar navigation={navigation} />
			<View styles={styles.container}>
				<View style={styles.summaryContainer}>
					<CardSmall lampName={lamp} />
					<View style={styles.inputFields}>
						<FilledInputField
							textInput={userData.phoneNumber}
							title={'Phone Number'}
						/>
						<FilledInputField
							textInput={userData.serialNumber}
							title={'Serial Number'}
						/>
						<FilledInputField
							textInput={userData.customerName}
							title={'Name'}
						/>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<LongButton
						icon="save"
						textColor="primary_teal"
						backgroundColor="primary_green"
						title="SAVE"
						onPress={async () => {
							await addNewRepair(userData); //add the form values to async storage
							navigation.navigate('HomeScreen'); // navigate to home screen
						}}
					/>
					{/* We need to supply the information received into this component, so it will show on the next screen*/}
					<LongButton
						icon="whiteRepair"
						textColor="white"
						backgroundColor="primary_teal"
						title="START REPAIR"
						onPress={async () => {
							await addNewRepair(userData);
							navigation.navigate('StartRepairScreen', { data: userData });
						}}
					/>
				</View>
			</View>
		</>
	);
};

export default CustomerFormSummaryScreen;

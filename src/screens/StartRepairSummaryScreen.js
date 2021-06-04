import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import * as NetInfo from '@react-native-community/netinfo';
import { BackButton } from '../components/BackButton';
import { DoneButton } from '../components/DoneButton';

//COMPONENTS
import { NavigationBar } from '../components/NavigationBar/NavigationBar';
import SelectedLampSummary from '../components/SelectedLampSummary';
import LongButton from '../components/LongButton';
import { addNewRepair, uploadRepairs } from '../utils/helpers';
import { spareParts } from '../utils/fakeDb';
import ComponentsChosenSummary from '../components/ComponentsChosenSummary';

const StartRepairSummaryScreen = ({ navigation, route }) => {
    //ICONS
    const noWifiIcon = require("../../assets/icons/wifi_off_red.png");
    const wifiIcon = require("../../assets/icons/wifi_primary.png");
    const savedIcon = require("../../assets/icons/save_big.png");
    const successIcon = require("../../assets/icons/done_green_bg.png");

	//NETWORK STATUS
	const [networkStatus, setNetworkStatus] = useState(false);
	
	//SAVED STATUS
  const [savedStatus, setSavedStatus] = useState(false);

 	//CHANGE STEP IN NAVIGATIONBAR
 	let navbarStep = 3;
 	if (!savedStatus) {
 		navbarStep = 3.5;
 	} else {
 		navbarStep = 3;
 	}

	//SELECTED PARTS
	const { data } = route.params;
	const { selectedPartId } = data;
	const [userData, setUserData] = useState({});
	const [index, setIndex] = useState();
	const [image, setImage] = useState();

	console.log(selectedPartId);

	const getParts = () => {
		if (userData.selectedPartId) {
			if (!userData.selectedPartId) {
				userData.selectedPartId = [];
			}
			spareParts.map((el, index) => {
				userData.selectedPartId.map((id) => {
					if (el.id === id) {
						setImage(el.image);
						setIndex(index);
					}
				});
			});
		}
	};

	useEffect(() => {
		//This package allows us to check the network state of the device we are using
		NetInfo.addEventListener((networkState) => {
			//If the device has internet, we set the networkStatus to true. If not, it will be false.
			setNetworkStatus(networkState.isWifiEnabled);
		});
		setUserData(data);
		getParts();
	}, []);

	return (
		<>
			<NavigationBar title="NEW REPAIR" navigation={navigation}  progressbar={true} step={navbarStep}/>
			<View style={styles.container}>
				<SelectedLampSummary
					index={'1'}
					lamp={userData.selectedLamp}
					sparePart={false}
					data={userData}
				/>
				<ComponentsChosenSummary selectedComponentsId={selectedPartId} />

				{/* Change content in step 3 based on saveStatus*/}
				{savedStatus ? (
				<View style={styles.unsavedSummaryContainer}>
					<View style={styles.unsavedSummaryContainerHeader}>
						<View style={styles.indexContainer}>
							<Text style={styles.indexText}>3</Text>
						</View>
						<Text style={styles.unsavedSummaryContainerTitle}>SAVE REPAIR</Text>
						{networkStatus ? (
							<Image source={wifiIcon} style={styles.wifiIcon} />
						) : (
							<Image source={noWifiIcon} style={styles.wifiIcon} />
						)}
					</View>

					<LongButton
						icon="save"
						textColor="primary_teal"
						backgroundColor="primary_green"
						title="SAVE"
						onPress={async () => {
							setSavedStatus(!savedStatus);
							await addNewRepair({...data, status: "DONE"});
							//navigation.navigate('HomeScreen');
						}}
					/>
					{networkStatus ? (
						<LongButton
							icon="save_upload"
							textColor="primary_teal"
							backgroundColor="primary_green"
							title="SAVE + UPLOAD"
							onPress={() => {
								uploadRepairs().then(() => {
									navigation.navigate('HomeScreen');
								});
							}}
						/>
					) : (
						<LongButton
							icon="save_upload_disabled"
							textColor="disabled"
							backgroundColor="disabled"
							title="SAVE + UPLOAD"
						/>
					)}
				</View>
					):(
				<View style={styles.savedSummaryContainer}>
						<View style={styles.indexContainerSaved}>
							<Text style={styles.indexText}>3</Text>
						</View>
						<Image source={savedIcon} style={styles.savedIcon} />
						<View style={styles.savedTextContainer}>
							<Text style={styles.smallSavedText}>Save Repair</Text>
							<Text style={styles.greenSavedText}>Saved Successfully!</Text>
						</View>
				</View>
					)}
					
					{savedStatus ? null :(
						<View style={styles.successContainer}>
							<Image source={successIcon} style={styles.successIcon}/>
							<Text style={styles.successText}>Repair registered</Text>
						</View>
					)}
				<View style={styles.navigateButtons}>
					<BackButton onPress={() => navigation.navigate('SelectPartsScreen')} />
					<DoneButton
						onPress={() => navigation.navigate('HomeScreen')}
						differentButton={savedStatus}
					/>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#B7D38135',
		height: '100%',
		position: 'relative'
	},
	unsavedSummaryContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		width: '90%',
		height: 330,
		marginLeft: 40,
		marginTop: 12,
		borderRadius: 18,
		backgroundColor: '#ffffff',
		borderColor: 'transparent',
		borderWidth: 4,
	},
	unsavedSummaryContainerHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		marginTop: 20,
	},
	unsavedSummaryContainerTitle: {
		fontSize: 24,
		fontFamily: 'ArialBold',
		color: '#174A5B',
		marginLeft: 22,
	},
	indexContainer: {
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		lineHeight: 1,
		borderRadius: 50 / 2,
		marginLeft: 30,
		backgroundColor: '#ffffff',
		borderColor: '#C3DC93',
		borderWidth: 4,
	},
	indexText: {
		color: '#174A5B',
		fontSize: 28,
		fontFamily: 'Arial',
		fontWeight: '700',
	},
	wifiIcon: {
		marginLeft: 'auto',
		marginRight: 30,
	},
	navigateButtons: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '90%',
		marginLeft: 40,
		marginRight: 40,
		position: 'absolute',
		bottom: 140
	},
	savedSummaryContainer: {
        width: '90%',
        height: 130,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 40,
        marginTop: 12,
        borderColor: 'rgba(195, 220, 147, 0.35)',
        borderWidth: 4,
        borderRadius: 18,
        backgroundColor: '#F3F8E9'
	},
	indexContainerSaved: {
		    width: 42,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        backgroundColor: '#C3DC93',
        borderRadius: 40 / 2,
        marginLeft: 30
	},
	savedIcon: {
		marginLeft: 90
	},
	savedTextContainer: {
		marginLeft: 80
	},
	smallSavedText: {
		fontFamily: 'Arial',
		color: '#174A5B',
		fontSize: 18
	},
		greenSavedText: {
		fontFamily: 'ArialBold',
		letterSpacing: 0.25,
		color: '#174A5B',
		fontSize: 18,
		textTransform: 'uppercase'
	},
	successContainer: {
		alignItems: 'center'
	},
	successIcon: {
		marginTop: 24
	},
	successText: {
		fontFamily: 'ArialBold',
		color: '#00966C',
		fontSize: 24,
		textTransform: 'uppercase',
		marginTop: 8
	}
});

export default StartRepairSummaryScreen;

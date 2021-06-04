import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image} from "react-native";
import {NextButton} from "../components/NextButton";
import {BackButton} from "../components/BackButton";
import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import CarouselCard from "../components/CarouselCard";
import {lamps} from "../utils/fakeDb";

export default function CustomerFormScreen({ navigation }) {
	const [userData, setUserData] = useState({});
	const [customerName, setCustomerName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [serialNumber, setSerialNumber] = useState('');
	const [lampName, setLampName] = useState('');
	const [selectedLampName, setSelectedLampName] = useState();

	const toggle_selected = (el_name) => {
 		if (selectedLampName === el_name) {
 			setSelectedLampName(' ');
 		} else {
 			setSelectedLampName(el_name);
 		}
 		setLampName(el_name)
 	};

	const lamps_div = lamps.map((el, i) => {
		const { name, image } = el;
		const is_selected = selectedLampName === name ? <View style={styles.checkMark}><Image style={styles.checkMarkIcon} source={require('../../assets/icons/done_teal.png')}/></View> : <Text>not selected</Text>;
		return (
			<TouchableOpacity onPress={() => toggle_selected(name)} key={i}>
				<CarouselCard img={image} />
				{is_selected}
			</TouchableOpacity>
		);
	});

    //CSS STATES FOR INPUT FIELDS
    const phoneNumberInputField = () => {
        if (phoneNumber.length == 0) {
            return (
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPhoneNumber(text)}/>
            )
        } else if (phoneNumber.length <= 7) {
            return (
                <TextInput
                    style={styles.inputError}
                    onChangeText={text => setPhoneNumber(text)}/>
            )
        } else {
            return (
                <TextInput
                    style={styles.inputSuccess}
                    onChangeText={text => setPhoneNumber(text)}/>
            )
        }
    }

    const customerInputField = () => {
        if (customerName.length == 0) {
            return (
                <TextInput
                    style={styles.input}
                    onChangeText={text => setCustomerName(text)}/>
            )
        } else if (customerName.length <= 2) {
            return (
                <TextInput
                    style={styles.inputError}
                    onChangeText={text => setCustomerName(text)}/>
            )
        } else {
            return (
                <TextInput
                    style={styles.inputSuccess}
                    onChangeText={text => setCustomerName(text)}/>
            )
        }
    }

    return (
        <>
            <NavigationBar title="NEW REPAIR" navigation={navigation}/>
            <ScrollView style={styles.container}>
                <Text style={styles.inputHeaders}>Customer Name</Text>
                {customerInputField()}

                <Text style={styles.inputHeaders}>Customer Phone Number</Text>
                {phoneNumberInputField()}

                <Text style={styles.inputHeaders}>Enter Serial Number</Text>
                <View style={styles.serialInputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setSerialNumber(text)}
                    />
                    {/*
                    <TouchableOpacity>
                        <View style={styles.qrButton}>
                            <Image source={require("../../assets/icons/qr_code_scanner.png")}/>
                        </View>
                    </TouchableOpacity>
                    */}
                </View>

                <Text style={styles.inputHeaders}>Choose Lamp</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.lampList}>
                    {lamps_div}
                </ScrollView>
                <View style={styles.navButtons}>
                    <BackButton onPress={() => navigation.navigate('HomeScreen')}/>
                    <NextButton onPress={() => {

                        navigation.navigate('CustomerFormSummaryScreen', {
                            customerName: customerName,
                            phoneNumber: phoneNumber,
                            serialNumber: serialNumber,
                            lamp: lampName
                        });
                    }}/>
                </View>
            </ScrollView>
            </>
    );
};

const styles = StyleSheet.create({

	container: {
		backgroundColor: '#F3F8E9',
		flex: 1,
		paddingLeft: '8%',
		height: '100%',
	},
	serialInputContainer: {
		flexDirection: 'row',
	},
	input: {
		width: '65%',
		backgroundColor: '#ffffff',
		fontSize: 28,
		borderWidth: 3,
		borderColor: '#C5D2D6',
		borderRadius: 10,
		paddingHorizontal: 20,
 		paddingVertical: 10,
	},
	inputHeaders: {
		color: '#174A5B',
		marginTop: 20,
		fontSize: 28,
		marginBottom: 4
	},
	qrButton: {
		width: 60,
		height: 60,
		backgroundColor: '#174A5B',
		justifyContent: 'center',
		alignContent: 'center',
		borderRadius: 7,
	},
	navButtons: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignContent: 'center',
		marginTop: 48
	},
	InputHeaders: {
		color: '#174A5B',
		width: '65%',
 		backgroundColor: '#ffffff',
 		borderColor: '#00966C',
 		fontSize: 28,
 		borderWidth: 4,
 		borderRadius: 10,
		paddingHorizontal: 20,
 		paddingVertical: 10,
},
	inputSuccess: {
		width: '65%',
		backgroundColor: '#ffffff',
		borderColor: '#00966C',
		fontSize: 28,
		borderWidth: 4,
		borderRadius: 10,
		paddingHorizontal: 20,
 		paddingVertical: 10,
	},
	inputError: {
		width: '65%',
		backgroundColor: '#ffffff',
		fontSize: 28,
		borderWidth: 4,
		borderColor: '#CB333B',
		borderRadius: 10,
		paddingHorizontal: 20,
 		paddingVertical: 10,
	},
	checkMark:{
 		width :'100%',
 		height : '90%',
 		opacity : 0.7,
 		position : 'absolute',
 		display:'flex',
 		flexDirection : 'row',
 		alignItems :'center',
 		justifyContent :'center',
 		backgroundColor: '#99a2b1',
 		borderRadius: 15,
 	},
 	checkMarkIcon:{
 		width : '70%',
 		height : '70%',
 	}
});

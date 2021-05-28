import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView} from "react-native";
import {NextButton} from "../components/NextButton";
import {BackButton} from "../components/BackButton";
import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import CarouselCard from "../components/CarouselCard";
import {lamps} from "../utils/fakeDb";


export default function CustomerFormScreen({navigation}) {

    const [userData, setUserData] = useState({});
    const [customerName, setCustomerName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [lampName, setLampName] = useState();

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

    const lamps_div = lamps.map((el, i) => {
        const {name, image} = el;
        return (
            <TouchableOpacity onPress={() => setLampName(name)} key={i}>
                <CarouselCard img={image} />
            </TouchableOpacity>
        )
    })

    return (
        <>
            <NavigationBar navigation={navigation}/>
            <ScrollView style={styles.container}>
                <Text style={styles.inputHeaders}>Customer Name</Text>
                {customerInputField()}

                <Text style={styles.inputHeaders}>Customer Phone Number</Text>
                {phoneNumberInputField()}

                <Text style={styles.inputHeaders}>Choose Lamp</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {lamps_div}
                </ScrollView>
                <Text style={styles.inputHeaders}>Enter Serial Number</Text>
                <View style={styles.serialInputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setSerialNumber(text)}
                    />
                    <TouchableOpacity>
                        <View style={styles.qrButton}>
                            <Image source={require("../../assets/icons/qr_code_scanner.png")}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.navButtons}>
                    <BackButton/>
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
        fontSize: 43,
        borderWidth: 3,
        borderColor: '#828384',
        borderRadius: 10,
    },
    inputHeaders: {
        color: '#174A5B',
        marginTop: '5%',
        fontSize: 34,
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
        alignContent: 'center'
    },
    inputSuccess: {
        width: '65%',
        backgroundColor: '#ffffff',
        borderColor: '#00966C',
        fontSize: 43,
        borderWidth: 3,
        borderRadius: 10,
    },
    inputError: {
        width: '65%',
        backgroundColor: '#ffffff',
        fontSize: 43,
        borderWidth: 3,
        borderColor: '#CB333B',
        borderRadius: 10,
    },
});

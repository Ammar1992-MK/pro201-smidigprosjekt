import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image} from "react-native";
import {NextButton} from "../components/NextButton";
import {BackButton} from "../components/BackButton";
import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import CarouselCard from "../components/CarouselCard";
import {lamps} from "../utils/fakeDb";

export default function CustomerFormScreen({navigation}) {
    const [userData, setUserData] = useState({});
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [lampName, setLampName] = useState('');
    const [selectedLampName, setSelectedLampName] = useState();

    //Detect which lamp has been selected
    const toggle_selected = (el_name) => {
        if (selectedLampName === el_name) {
            setSelectedLampName(' ');
        } else {
            setSelectedLampName(el_name);
        }
        setLampName(el_name)
    };
    
    const lamps_div = lamps.map((el, i) => {
        //Show which lamp has been selected
        let is_selected = false;
        const {name, image} = el;
        if(selectedLampName === name){
            is_selected = true;
        }
        return (
            <TouchableOpacity onPress={() => toggle_selected(name)} key={i}>
                <CarouselCard img={image} selected={is_selected}/>
            </TouchableOpacity>
        );
    });

    //CSS for input validation
    const customer_input_vali_style = customerName.length === 0 ? styles.input : customerName.length <= 2 ? styles.inputError : styles.inputSuccess
    const phone_input_vali_style = phoneNumber.length === 0 ? styles.input : phoneNumber.length <= 7 ? styles.inputError : styles.inputSuccess

    return (
        <>
            <NavigationBar title="NEW REPAIR" navigation={navigation} progressbar={true} step={1}/>
            <ScrollView style={styles.container}>
                <Text style={styles.inputHeaders}>Customer Name</Text>
                <TextInput
                    style={customer_input_vali_style}
                    onChangeText={text => setCustomerName(text)}/>

                <Text style={styles.inputHeaders}>Customer Phone Number</Text>
                <TextInput
                    style={phone_input_vali_style}
                    onChangeText={text => setPhoneNumber(text)}/>

                <Text style={styles.inputHeaders}>Enter Serial Number</Text>
                <View style={styles.serialInputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setSerialNumber(text)}
                    />
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
        marginBottom: 4,
        fontFamily: 'Arial'
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
    checkMark: {
        width: '100%',
        height: '90%',
        opacity: 1,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        zIndex: 100,
    },
    checkMarkIcon: {
        width: '70%',
        height: '70%',
        zIndex: 200
    }
});

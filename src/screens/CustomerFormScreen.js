import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, SafeAreaView} from "react-native";
import {NextButton} from "../components/NextButton";
import {BackButton} from "../components/BackButton";
import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import CarouselCard from "../components/CarouselCard";
import {lamps} from "../utils/fakeDb";
import { size } from 'lodash';

export default function CustomerFormScreen({navigation}) {
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
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeaders}>Customer Name <Text style={styles.optionalText}>(Optional)</Text></Text>
                    <TextInput
                        style={customer_input_vali_style}
                        onChangeText={text => setCustomerName(text)}/>

                    <Text style={styles.inputHeaders}>Customer Phone Number  <Text style={styles.optionalText}>(Optional)</Text></Text>
                    <TextInput
                        style={phone_input_vali_style}
                        onChangeText={text => setPhoneNumber(text)}/>

                    <Text style={styles.inputHeaders}>Enter Serial Number <Text style={styles.optionalText}>(Optional)</Text></Text>
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
                </View>
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
            </View>
        </>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#B7D38135',
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    inputContainer: {
        width: '85%',
        alignItems: 'flex-start',
        marginTop: 40
    },
    serialInputContainer: {
        flexDirection: 'row',
    },
    input: {
        width: '70%',
        backgroundColor: '#ffffff',
        fontSize: 28,
        borderWidth: 3,
        borderColor: '#C5D2D6',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontFamily: 'Arial'
    },
    inputHeaders: {
        color: '#174A5B',
        marginTop: 20,
        fontSize: 28,
        marginBottom: 4,
        fontFamily: 'Arial'
    },
    optionalText: {
        fontSize: 20,
        color: '#174A5B95',
        fontFamily: 'Arial',
    },
    lampList: {
        overflow: 'visible'
    },
    navButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        marginTop: 48,
        width: '90%',
        bottom: 20
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
    }
});

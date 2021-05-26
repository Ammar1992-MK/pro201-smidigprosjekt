import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image} from "react-native";
import {NextButton} from "../components/NextButton";
import {BackButton} from "../components/BackButton";
import CardCarousel from "../components/CardCarousel";
import {NavigationBar} from "../components/NavigationBar/NavigationBar";

export default function CustomerFormScreen({navigation}) {
    return (
        <>
            <NavigationBar navigation={navigation}/>
            <View style={styles.container}>
                <Text style={styles.inputHeaders}>Customer Name</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.inputHeaders}>Customer Phone Number</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.inputHeaders}>Choose Lamp</Text>
                <View>
                    <CardCarousel/>
                </View>
                <Text style={styles.inputHeaders}>Enter Serial Number</Text>
                <View style={styles.serialInputContainer}>
                    <TextInput style={styles.input}/>
                    <TouchableOpacity>
                        <View style={styles.qrButton}>
                            <Image source={require("../../assets/icons/qr_code_scanner.png")}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.navButtons}>
                    <BackButton/>
                    <NextButton onPress={() => navigation.navigate('CustomerFormSummaryScreen')}/>
                </View>
            </View>
        </>
            );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F8E9',
        flex: 1,
        paddingLeft: '8%',
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
});

import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView} from "react-native";

import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import { HomeScreenButton } from '../components/HomeScreenButton';

const LearnHomeScreen = ({navigation}) => {
    return (
        <>
            <NavigationBar navigation={navigation}/>
            <View style={LearnHomeScreenStyles.container}>
                <HomeScreenButton  icon={'search'} title={'TROUBLESHOOT GUIDE'} onPress={() => navigation.navigate('TroubleshootScreen')} />
                <HomeScreenButton icon={'search'} title={'CHANGE PART VIDEOS'} />
            </View>
        </>
    );
};

const LearnHomeScreenStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F8E9',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'ArialBold',
        marginTop: '7%',
    },
    button: {
        height: '80%',
    },

});

export default LearnHomeScreen;

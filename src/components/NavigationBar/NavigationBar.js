import * as React from 'react';
import {StyleSheet, Text, View, Button} from "react-native";

//Components
import {NavigationHomeButton} from "./NavigationHomeButton";

export const NavigationBar = ({navigation}) => {
    return (
        <View style={NavigationBarStyles.container}>
            <NavigationHomeButton navigation={navigation} />
            <Text style={NavigationBarStyles.title}>NEW REPAIR</Text>
        </View>
    );
};

const NavigationBarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        backgroundColor: '#174A5B',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
})
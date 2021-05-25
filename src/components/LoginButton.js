import * as React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text, Image} from "react-native";

export const LoginButton = ({onPress}) => {
    return(
        <View>
            <TouchableOpacity onPress={onPress} style={LoginButtonStyles.button}>
                <Text style={LoginButtonStyles.text}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
    )
}

const LoginButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#C3DC93',
        color: '#174A5B',
        borderRadius: 10,
        width: 500,
        height: 50,
        marginVertical: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
})
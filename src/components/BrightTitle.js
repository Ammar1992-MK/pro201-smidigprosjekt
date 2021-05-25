import * as React from "react";
import {View, Text, StyleSheet} from "react-native";

export const BrightTitle = () => {
    return (
        <View style={BrightTitleStyles.container}>
            <Text style={BrightTitleStyles.headingText}>BR!GHT</Text>
            <Text style={BrightTitleStyles.lowerText}>LEARN & REPAIR</Text>
        </View>
    );
}

const BrightTitleStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        fontFamily: 'Arial',
        justifyContent: 'center',
        marginVertical: 55,
    },
    headingText: {
        color: "#9FD18B",
        fontSize: 60,
        fontWeight: "bold"
    },
    lowerText: {
        color: "#9FD18B",
        fontSize: 40
    }
});
import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

export const FinishedRepairs = ({dataLength}) => {
    return(
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/icons/folder.png')} />
                <Text style={styles.numOfRepairs}>{dataLength}</Text>
            </View>
            <Text style={styles.text}>Finished Repairs</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 80
    },
    folderContainer: {
        position: 'relative',
    },
    numOfRepairs: {
        borderWidth: 3,
        borderRadius: 50,
        borderColor: '#fff',
        position: 'absolute',
        bottom: -15,
        right: -15,
        fontSize: 32,
        fontFamily: 'ArialBold',
        paddingHorizontal: 18,
        paddingTop: 6,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#174A5B',
        lineHeight: 34
    },
    text: {
        fontSize: 22,
        color: '#174A5B',
        fontFamily: 'Arial',
        marginTop: 14
    }
});
import React,{useState,useEffect} from 'react';
import {Text, View,Image, StyleSheet} from "react-native";

const SelectedLampSummary = ({lamp,data}) => {
    
    return (
        <>
            <View style={styles.container}>
                <View style={styles.indexContainer}>
                    <Text style={styles.indexText}>1</Text>
                </View>
                <View style={styles.lampImageContainer}>
                    {lamp && <Image style={styles.selectedLampImage} source={lamp}/>}
                </View>
                <View style={styles.selectedLampInfoContainer}>
                    <View>
                        <Text style={styles.selectedLampName}>{data.lampName ? data.lampName : 'No lamp chosen'}</Text>
                    </View>
                        <View>
                        <Text style={styles.selectedLampSerialNo}>SNR</Text>
                        <Text style={styles.selectedLampSerialNoText}>{data.serialNumber ? data.serialNumber : ' -'}</Text>
                    </View>
                </View>
            </View>
        </>
    )
};
export default SelectedLampSummary;

const styles = StyleSheet.create({
    container: {
        width: '82%',
        height: 160,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 60,
        marginTop: 20,
        borderColor: 'rgba(195, 220, 147, 0.35)',
        borderWidth: 4,
        borderRadius: 18,
        backgroundColor: '#F3F8E9'
    },

    indexContainer: {
        width: 42,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        backgroundColor: '#C3DC93',
        borderRadius: 40 / 2,
        marginLeft: 30
    },

    indexText: {
        color: '#174A5B',
        fontSize: 28,
        fontFamily: 'Arial',
        fontWeight: '700'
    },

    lampImageContainer: {
        width: '20%',
        height: '84%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 18,
        borderColor: 'rgba(195, 220, 147, 0.15)',
        borderWidth: 3,
        borderStyle: 'solid',
        marginLeft: 50
    },

    selectedLampImage: {
        width: '100%',
        height: '100%',
    },

    selectedLampInfoContainer: {
        width: '47%',
        height: '100%',
        marginLeft: 50
    },

    selectedLampName: {
        color: '#174A5B',
        fontSize: 28,
        fontFamily: 'ArialBold',
        lineHeight: 24,
        marginVertical: 4,
        letterSpacing: 0.5,
        paddingTop: 30
    },
    selectedLampSerialNo: {
        color: '#174A5B',
        fontSize: 20,
        fontFamily: 'Arial',
        marginTop: 8
    },
    selectedLampSerialNoText: {
        color: '#174A5B',
        fontSize: 24,
        fontFamily: 'ArialBold',
        lineHeight: 24,
        marginBottom: 4
    }
});
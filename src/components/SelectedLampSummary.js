import React from 'react';
import {Text, View, Image, StyleSheet} from "react-native";

const SelectedLampSummary = () => {
    return (
        <>
            <View style={SelectedLampSummaryStyles.container}>
                <View style={SelectedLampSummaryStyles.indexContainer}>
                    <Text style={SelectedLampSummaryStyles.indexText}>1</Text>
                </View>
                <View style={SelectedLampSummaryStyles.lampImageContainer}>
                    <Image style={SelectedLampSummaryStyles.selectedLampImage}
                           source={require('../../assets/product-images/sunbell-smart-1.png')}/>
                </View>
                <View style={SelectedLampSummaryStyles.selectedLampInfoContainer}>
                    <View style={SelectedLampSummaryStyles.selectedLampNameContainer}>
                        <Text style={SelectedLampSummaryStyles.selectedLampName}>Sunbell Smart</Text>
                    </View>
                    <View style={SelectedLampSummaryStyles.selectedLampRepairIdContainer}>
                        <Text style={SelectedLampSummaryStyles.selectedLampRepairId}>REPAIR ID</Text>
                        <Text style={SelectedLampSummaryStyles.selectedLampRepairIdText}>FR2324</Text>
                    </View>
                    <View style={SelectedLampSummaryStyles.selectedLampSerialNoContainer}>
                        <Text style={SelectedLampSummaryStyles.selectedLampSerialNo}>SNR</Text>
                        <Text style={SelectedLampSummaryStyles.selectedLampSerialNoText}>333-567-812</Text>
                    </View>
                </View>
            </View>
        </>
    )
};
export default SelectedLampSummary;

const SelectedLampSummaryStyles = StyleSheet.create({
    container: {
        width: '90%',
        height: 210,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 40,
        marginTop: 40,
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
        width: '28%',
        height: '84%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 28,
        borderColor: 'rgba(195, 220, 147, 0.15)',
        borderWidth: 3,
        borderStyle: 'solid'
    },

    selectedLampImage: {
        width: '40%',
        height: '100%',
    },

    selectedLampInfoContainer: {
        width: '47%',
        height: '84%'
    },

    selectedLampName: {
        color: '#174A5B',
        fontSize: 24,
        fontFamily: 'ArialBold'

    },
    selectedLampRepairId: {
        color: '#174A5B',
        fontSize: 20,
        fontFamily: 'Arial',
        lineHeight: 30
    },
    selectedLampRepairIdText: {
        color: '#174A5B',
        fontSize: 30,
        fontFamily: 'ArialBold',
        lineHeight: 38
    },
    selectedLampSerialNo: {
        color: '#174A5B',
        fontSize: 20,
        fontFamily: 'Arial',
        lineHeight: 28
    },
    selectedLampSerialNoText: {
        color: '#174A5B',
        fontSize: 30,
        fontFamily: 'ArialBold',
        lineHeight: 38

    },
});
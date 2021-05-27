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
        height: 200,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 40,
        marginTop: 35,
        borderColor: '#C3DC93',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#F3F8E9',
    },

    indexContainer: {
        width: 40,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C3DC93',
        borderRadius: 40 / 2,
        marginLeft: 30
    },

    indexText: {
        color: '#174A5B',
        fontSize: 30,
    },

    lampImageContainer: {
        width: '30%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
    },

    selectedLampImage: {
        width: '40%',
        height: '100%',
    },

    selectedLampInfoContainer: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    selectedLampName: {
        color: '#174A5B',
        fontSize: 30,
        fontWeight: 'bold'

    },
    selectedLampRepairId: {
        color: '#174A5B',
        fontSize: 20,
    },
    selectedLampRepairIdText: {
        color: '#174A5B',
        fontSize: 30,
        fontWeight: 'bold'
    },
    selectedLampSerialNo: {
        color: '#174A5B',
        fontSize: 20,
    },
    selectedLampSerialNoText: {
        color: '#174A5B',
        fontSize: 30,
        fontWeight: 'bold'
    },
});
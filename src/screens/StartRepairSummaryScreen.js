import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Alert} from "react-native";
import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import * as NetInfo from "@react-native-community/netinfo";
import SelectedLampSummary from "../components/SelectedLampSummary";
import LongButton from "../components/LongButton";


const StartRepairSummaryScreen = ({navigation, route}) => {

    //SELECTED PART
    const [selectedPart, setSelectedPart] = useState({});
    const {data} =  route.params;

    //WIFI ICONS
    const noWifiIcon = require("../../assets/icons/no_wifi.png");
    const wifiIcon = require("../../assets/icons/wifi_grey.png");

    //NETWORK STATUS
    const [networkStatus, setNetworkStatus] = useState(false)

    useEffect(() => {
        //This package allows us to check the network state of the device we are using
        NetInfo.addEventListener(networkState => {
            //If the device has internet, we set the networkStatus to true. If not, it will be false.
            setNetworkStatus(networkState.isWifiEnabled);
        })

        setSelectedPart(data)
        console.log(data)
    }, []);

    return (
        <>
            <NavigationBar navigation={navigation}/>
            <View style={styles.container}>
                <SelectedLampSummary lamp={true} wrench={false} index={1} data={selectedPart}/>
                <SelectedLampSummary wrench={true} lamp={false} index={2} data={selectedPart}/>
                <View style={styles.saveContainer}>
                    <Text style={styles.saveContainerTitle}>SAVE REPAIR</Text>
                    {networkStatus ? <Image source={wifiIcon} style={styles.wifiIcon} /> : <Image source={noWifiIcon} style={styles.wifiIcon} />}
                    <LongButton icon="save" textColor="primary_teal" backgroundColor="primary_green" title="SAVE" />
                    <LongButton icon="save" textColor="primary_teal" backgroundColor="primary_green" title="SAVE + UPLOAD"/>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B7D38135',
        height: '100%'
    },
    saveContainer: {
        position: 'relative',
        marginTop: 20,
        padding: 20,
        backgroundColor: '#FFFFFF',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 5,
    },
    saveContainerTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    wifiIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 20
    }
})

export default StartRepairSummaryScreen;
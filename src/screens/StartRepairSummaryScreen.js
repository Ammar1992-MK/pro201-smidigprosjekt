import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Alert} from "react-native";
import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import * as NetInfo from "@react-native-community/netinfo";


const StartRepairSummaryScreen = ({navigation}) => {

    //WIFI ICONS
    const noWifiIcon = require("../../assets/icons/no_wifi.png");
    const wifiIcon = require("../../assets/icons/wifi_grey.png");

    const [networkStatus, setNetworkStatus] = useState(false)


    useEffect(() => {
        //This package allows us to check the network state of the device we are using
        NetInfo.addEventListener(networkState => {
            //If the device has internet, we set the networkStatus to true. If not, it will be false.
            setNetworkStatus(networkState.isWifiEnabled);
        })
    }, []);

    return (
        <>
            <NavigationBar navigation={navigation}/>
            <View>
                <Text>Lets repair!</Text>
                {networkStatus ? <Image source={wifiIcon}/> : <Image source={noWifiIcon}/>}
            </View>
        </>
    );
}


export default StartRepairSummaryScreen;
import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, ImageBackground} from "react-native";
import * as NetInfo from "@react-native-community/netinfo";

//Components
import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import {FinishedRepairs} from "../components/FinishedRepairs";
import LongButton from "../components/LongButton";


const UploadScreen = ({navigation}) => {
    //WIFI ICONS
    const noWifiIcon = require("../../assets/icons/no_internet_icon.png");
    const wifiIcon = require("../../assets/icons/internet_icon.png");

    //NETWORK STATUS
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
            <NavigationBar icon={false} title={"UPLOAD"} navigation={navigation}/>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    {networkStatus ? <Image source={wifiIcon}/> : <Image source={noWifiIcon}/>}
                    <Text>Last Upload: Tue 12.05.21</Text>
                </View>
                <FinishedRepairs />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    }
})

export default UploadScreen;
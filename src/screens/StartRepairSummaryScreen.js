import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Alert} from "react-native";
import * as NetInfo from "@react-native-community/netinfo";

//COMPONENTS
import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import SelectedLampSummary from "../components/SelectedLampSummary";
import LongButton from "../components/LongButton";
import {addNewRepair} from "../utils/helpers";
import {spareParts} from "../utils/fakeDb";
import ComponentsChosenSummary from "../components/ComponentsChosenSummary";


const StartRepairSummaryScreen = ({navigation, route}) => {

    //WIFI ICONS
    const noWifiIcon = require("../../assets/icons/no_wifi.png");
    const wifiIcon = require("../../assets/icons/wifi_grey.png");

    //NETWORK STATUS
    const [networkStatus, setNetworkStatus] = useState(false)

    //SELECTED PARTS
    const {data} = route.params;
    const {selectedPartId} = data;
    const[userData, setUserData] = useState({});
    const[index, setIndex] = useState();
    const[image, setImage] = useState();

    console.log(selectedPartId)

    const  getParts = () => {
        if (userData.selectedPartId) {
            spareParts.map((el, index,) => {
                userData.selectedPartId.map((id) => {
                    if (el.id === id) {
                        setImage(el.image);
                        setIndex(index)
                    }
                })
            })
        }
    }

    useEffect(() => {
        //This package allows us to check the network state of the device we are using
        NetInfo.addEventListener(networkState => {
            //If the device has internet, we set the networkStatus to true. If not, it will be false.
            setNetworkStatus(networkState.isWifiEnabled);
        })
        setUserData(data)
        getParts()
    }, []);

    const testData = {
        serialNumber: '69 69 69'
    }

    return (
        <>
            <NavigationBar title="LEARN" navigation={navigation}/>
            <View style={styles.container}>
                <SelectedLampSummary index={'1'} lamp={userData.selectedLamp} sparePart={false} data={userData}/>
                <ComponentsChosenSummary selectedComponentsId={selectedPartId} />
                <View style={styles.saveContainer}>
                    <Text style={styles.saveContainerTitle}>SAVE REPAIR</Text>
                    {networkStatus ? <Image source={wifiIcon} style={styles.wifiIcon}/> :
                        <Image source={noWifiIcon} style={styles.wifiIcon}/>}
                    <LongButton icon="save" textColor="primary_teal" backgroundColor="primary_green" title="SAVE"
                                onPress={async () => {
                                    await addNewRepair(testData);
                                    navigation.navigate('HomeScreen');
                                }}/>
                    <LongButton icon="save" textColor="primary_teal" backgroundColor="primary_green"
                                title="SAVE + UPLOAD"
                                onPress={async () => {
                                    //WE NEED TO ADD THE UPLOAD FUNCTIONALITY HERE
                                    await addNewRepair(testData);
                                    navigation.navigate('HomeScreen');
                                }}/>
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
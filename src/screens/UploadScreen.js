import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, Alert} from "react-native";
import * as NetInfo from "@react-native-community/netinfo";

//Components
import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import {FinishedRepairs} from "../components/FinishedRepairs";
import {getData, uploadRepairs} from "../utils/helpers";
import LongButton from "../components/LongButton";

//List
import ScrollViewSearchList from "../components/ScrollViewSearchList";
import ListItemComponent from "../components/ListItemComponent";

//firebase db
import db from "../firebase/firebaseDb";

const UploadScreen = ({navigation}) => {

    //NETWORK STATUS
    const [networkStatus, setNetworkStatus] = useState(false)
    const [data, setData] = useState([]);

    //WIFI ICONS
    const noWifiIcon = require("../../assets/icons/no_internet_icon.png");
    const wifiIcon = require("../../assets/icons/internet_icon.png");

    useEffect(() => {
        //This package allows us to check the network state of the device we are using
        NetInfo.addEventListener(networkState => {
            //If the device has internet, we set the networkStatus to true. If not, it will be false.
            setNetworkStatus(networkState.isWifiEnabled);
            getData().then(data => setData(data)); //set the local data from AsyncStorage to our state
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
                <FinishedRepairs dataLength={data.length}/>
                {networkStatus ?
                    <LongButton icon="upload" textColor="primary_teal" backgroundColor="primary_green" title="UPLOAD"
                                onPress={() => {
                                    uploadRepairs().then(()=>{
                                        setData([])
                                    })
                                }
                                }/> :
                    <LongButton icon="upload" textColor="disabled" backgroundColor="disabled" title="UPLOAD"
                                onPress={() => Alert.alert("No Internet", "You need internet to upload your files")} />}

                <ScrollViewSearchList data={data} icon={'upload'}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    topContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        margin: 10
    }
})

export default UploadScreen;
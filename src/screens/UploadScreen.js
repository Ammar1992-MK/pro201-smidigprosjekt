import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, Alert, ScrollView} from "react-native";
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
    const noWifiIcon = require("../../assets/icons/wifi_off_white.png");
    const wifiIcon = require("../../assets/icons/wifi_white.png");
    const calenderIcon = require("../../assets/icons/date_primary.png");

    useEffect(() => {
        //This package allows us to check the network state of the device we are using
        NetInfo.addEventListener(networkState => {
            //If the device has internet, we set the networkStatus to true. If not, it will be false.
            setNetworkStatus(networkState.isWifiEnabled);
            getData().then(data => {
                const only_done = data.filter(el => {
                    return el.status === "DONE"
                })
                setData(only_done)
            }); //set the local data from AsyncStorage to our state
        })
    }, []);


    return (
        <>
            <NavigationBar icon={false} title={"UPLOAD"} navigation={navigation}/>
            <ScrollView style={styles.container}>
                <View style={styles.topSection}>
                    <View style={styles.topContainer}>

                        { networkStatus ? (
                            <View style={styles.wifiContainerOn}>
                                <Text style={styles.wifiText}>Internet</Text> 
                                <Image source={wifiIcon} style={styles.wifiIcon}/>
                            </View>
                        ) 
                        :
                        (
                        <View style={styles.wifiContainerOff}>
                            <Text style={styles.wifiText}>No Internet</Text>
                            <Image source={noWifiIcon} style={styles.wifiIcon}/>
                        </View>
                        )}

                        <View style={styles.dateContainer}>
                            <Text style={styles.dateText}>Last Upload: </Text>
                            <Image source={calenderIcon} style={styles.dateIcon}/>
                            <Text style={styles.dateText}>Tue 12.05.21</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.lowerSection}>
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
                                    onPress={() => Alert.alert("No Internet", "You need internet to upload your files")} 
                        />}
                </View>
                <View style={styles.listSection}>
                        <View style={styles.tableHeadContainer}>
                            <Text style={styles.tableText}>Lamp</Text>
                            <Text style={styles.tableText}>SNR</Text>
                            <Text style={styles.tableText}>Date</Text>
                    </View>
                    <ScrollViewSearchList data={data} icon={'upload'}/>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#FFF'
    },
    topSection: {
        alignItems: 'center',
        width: '100%',
    },
    lowerSection: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 50,
        marginTop: -20
    },
    listSection: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 30,
        backgroundColor: '#B7D38125',
        paddingBottom: 200
    },
    topContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '43%',
    },
    dateText: {
        fontFamily: 'ArialBold',
        fontSize: 22,
        color: '#174A5B'
    },
    dateIcon: {
        transform: [{ scale: 0.75 }],
    },
    wifiContainerOn: {
        flexDirection: 'row',
        backgroundColor: '#00966C',
        borderRadius: 4,
        marginTop: 8,
        padding: 4
    },
        wifiContainerOff: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CB333B',
        borderRadius: 4,
        marginTop: 8,
        padding: 4

    },
    wifiText: {
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 24,
        paddingHorizontal: 18,
        paddingVertical: 8
    },
    wifiIcon: {
        transform: [{ scale: 0.9 }],
        marginRight: 8
    },
    tableHeadContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 3,
        borderColor: 'rgba(23, 74, 91, 0.25)',
        height: 75,
        backgroundColor: '#fff'
    },
    tableText: {
        fontSize: 26,
        fontFamily: 'ArialBold',
        color: '#2C2A29',
        width: '30%',
        textAlign: 'center',
        marginRight: 50
    }
})

export default UploadScreen;
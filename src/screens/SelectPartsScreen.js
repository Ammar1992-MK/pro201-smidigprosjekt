import React,{useState, useEffect} from 'react';

import {Text,View, StyleSheet,ScrollView,Image} from "react-native";

//COMPONENTS
import SelectedLampSummary from "../components/SelectedLampSummary";
import {NavigationBar} from '../components/NavigationBar/NavigationBar'
import LongButton from "../components/LongButton";


const SelectPartsScreen = ({navigation, route}) => {
    const [userData, setUserData] = useState({});

    const {data} = route.params;

    useEffect(() => {
        setUserData(data);
    },[])

    return(
        <View style={styles.container}>
            <NavigationBar navigation={navigation}/>
            <SelectedLampSummary wrench={true} data={userData} index={"1"}/>
            {/*Missing onPress to navigate to LEARN*/}
            <LongButton title={"CHANGE PART GUIDE"} backgroundColor={'primary_teal'} icon={'learn'} textColor={'white'}/>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={{justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.scrollHeader}>
                    <View style={styles.stepIndex}><Text style={styles.stepIndexTitle}>2</Text></View>
                    <Text style={styles.scrollHeaderTitle}>SELECT PART</Text>
                    <Image style={styles.repairIcon} source={require('../../assets/icons/wrench_grren_bg.png')}/>
                </View>
                <View style={styles.firstRow}>
                    <Image style={styles.partImage} source={require('../../assets/product-images/battery.png')}/>
                    <Image style={styles.partImage} source={require('../../assets/product-images/circuit_card.png')}/>
                </View>
                <View style={styles.secondRow}>
                    <Image style={styles.partImage} source={require('../../assets/product-images/cogs.png')}/>
                    <Image style={styles.partImage} source={require('../../assets/product-images/light_bulb.png')}/>
                </View>
                <View style={styles.firstRow}>
                    <Image style={styles.partImage} source={require('../../assets/product-images/battery.png')}/>
                    <Image style={styles.partImage} source={require('../../assets/product-images/circuit_card.png')}/>
                </View>
                <View style={styles.secondRow}>
                    <Image style={styles.partImage} source={require('../../assets/product-images/cogs.png')}/>
                    <Image style={styles.partImage} source={require('../../assets/product-images/light_bulb.png')}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default SelectPartsScreen;

const styles = StyleSheet.create({
   container : {
       backgroundColor: "#F3F8E9",
       flex: 1,
       flexDirection: "column",
       alignItems: "center",
   },
    scrollContainer:{
        width : '80%',
        display : 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    firstRow: {

       display:'flex',
        flexDirection :'row',
        width : '100%',
        alignItems: 'center',
        justifyContent : 'center',
    },

    secondRow : {
        display:'flex',
        flexDirection :'row',
        width : '100%',
        alignItems: 'center',
        justifyContent : 'center',
    },

    partImage : {

        margin: 10,
        width: '40%',
    },
    scrollHeader:{
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        width : '50%',
        justifyContent :'space-evenly'
    },

    stepIndex:{
       width : 50,
        height : 50,
            display : 'flex',
            flexDirection : 'row',
            alignItems : 'center',
        justifyContent :'center',
       borderColor : '#C3DC93',
        borderWidth : 5,
        borderRadius : 50,
    },

    scrollHeaderTitle: {
       color :'#174A5B',
        fontWeight :'bold',
        fontSize : 30,
    },
    stepIndexTitle:{
      color :'#174A5B',
        fontWeight: 'bold',
        fontSize: 30,
    },
});
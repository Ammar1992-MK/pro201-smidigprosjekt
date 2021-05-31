import React from 'react'
import {Text, View, StyleSheet, Image} from "react-native";

const SearchListItemComponent = ({data}) => {

    return (

            <View style={Styles.container}>
                <View style={Styles.lampContainer}>
                    <Image style={Styles.lamp} source={require('../../assets/product-images/sunbell-smart-1.png')}/>
                    <Text style={Styles.lampName}>Sunbell Smart</Text>
                </View>
                <View style={Styles.serialNumberContainer}>
                    <Text style={Styles.serialNo}>XXX-XXX-XXX</Text>
                </View>
                <View style={Styles.repairDate}>
                    <Image style={Styles.dateIcon} source={require('../../assets/icons/date.png')}/>
                    <Text style={Styles.dateText}>05.11.21</Text>
                </View>
                <View></View>
            </View>

        )
}

export default  SearchListItemComponent;

const Styles = StyleSheet.create({
    container: {
        width: "96%",
        height: 120,
        display : 'flex',
        flexDirection : 'row',
        marginTop: 64,
        borderRadius: 5,
        justifyContent: "space-between",
        alignItems: 'flex-end',
        marginLeft : 15,
    },
    lampContainer:{
        width : '33%',
        height : '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    lamp:{
        width : '20%',
        height : '80%',
    },
    lampName : {
      marginTop: 45,
        fontFamily : 'Arial',
        fontSize : 20,
        color : '#2C2A29',
    },
    serialNumberContainer:{
        width : '33%',
        display : 'flex',
        flexDirection :'row',
        alignItems :'center',
        justifyContent :'center',
        marginBottom : 21,
        marginLeft : 25,
    },
    serialNo:{
        fontFamily : 'Arial',
        fontSize : 20,
        color : '#2C2A29',
    },
    repairDate : {
        width : '33%',
        height : '60%',
        display : 'flex',
        flexDirection : 'row',
        alignItems :'center',
        justifyContent : 'center',
        marginLeft : 40,
    },
    dateIcon:{
        width : '10%',
        height :'40%',
        marginRight : 15,
    },
    dateText:{
        fontFamily : 'Arial',
        fontSize : 20,
        color : '#2C2A29',
    }

});
import React,{useState,useEffect} from 'react'
import {Text, View, StyleSheet, Image} from "react-native";

const ListItemComponent = ({data,icon}) => {
    const[dateIcon, setDateIcon] = useState();

    const renderDateIcon = () => {
        if(icon === 'search'){
            setDateIcon(require('../../assets/icons/date.png'))
        } else if (icon === 'upload'){
            setDateIcon(require('../../assets/icons/date_finished.png'))
        }
    }

    useEffect(renderDateIcon,[])
    return (

            <View style={Styles.container}>
                <View style={Styles.lampContainer}>
                    <Image style={Styles.lamp} source={data.image}/>
                    <Text style={Styles.lampName}>{data.lampName}</Text>
                </View>
                <View style={Styles.serialNumberContainer}>
                    <Text style={Styles.serialNo}>{data.snr}</Text>
                </View>
                <View style={Styles.repairDate}>
                    <Image style={Styles.dateIcon} source={dateIcon}/>
                    <Text style={Styles.dateText}>{data.date}</Text>
                </View>
                <View></View>
            </View>

        )
}

export default  ListItemComponent;

const Styles = StyleSheet.create({
    container: {
        width: "96%",
        height: 120,
        display : 'flex',
        flexDirection : 'row',
        borderRadius: 5,
        justifyContent: "space-between",
        alignItems: 'flex-end',
        backgroundColor : '#fff',
        marginTop : 10,
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
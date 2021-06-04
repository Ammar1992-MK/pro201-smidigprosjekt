import React,{useState,useEffect} from 'react'
import {Text, View, StyleSheet, Image} from "react-native";

const ListItemComponent = ({data,icon}) => {
    const[dateIcon, setDateIcon] = useState();
    const [lampImage, setLampImage] = useState();

    const renderDateIcon = () => {
        if(icon === 'search'){
            setDateIcon(require('../../assets/icons/date.png'))
        } else if (icon === 'upload'){
            setDateIcon(require('../../assets/icons/date_finished.png'))
        }
    }

    const renderImage = () => {
        switch (data.lamp) {
            case "Sunbell Smart":
                setLampImage(require('../../assets/product-images/sunbell-smart-1.png'));
                break;
            case "Smart Plus":
                setLampImage(require('../../assets/product-images/smart-plus-1.png'));
                break;
            case "Sun Turtle":
                setLampImage(require('../../assets/product-images/sunturtle.png'));
                break;
        }
    }


    useEffect(() => {
        renderDateIcon();
        renderImage();
    },[])
    return (
            <View style={Styles.container}>
                <View style={Styles.lampContainer}>
                    <Image style={Styles.lamp} source={lampImage}/>
                    <Text style={Styles.lampName}>{data.lamp}</Text>
                </View>
                <View style={Styles.serialNumberContainer}>
                    <Text style={Styles.serialNo}>{data.serialNumber}</Text>
                </View>
                <View style={Styles.repairDate}>
                    <Image style={Styles.dateIcon} source={dateIcon}/>
                    <Text style={Styles.dateText}>{data.date}</Text>
                </View>
                <View></View>
            </View>

        )
}

export default ListItemComponent;

const Styles = StyleSheet.create({
    container: {
        width: "96%",
        display : 'flex',
        flexDirection : 'row',
        borderRadius: 5,
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor : '#fff',
        marginTop : 10,
    },
    lampContainer:{
        width : '30%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    lamp:{
        width : '60%',
    },
    lampName : {
      marginTop: 45,
        marginLeft : 45,
        fontFamily : 'Arial',
        fontSize : 20,
        color : '#2C2A29',
    },
    serialNumberContainer:{
        width : '35%',
        display : 'flex',
        flexDirection :'row',
        alignItems :'center',
        justifyContent :'center',
        marginTop : 45,
        marginLeft : 40,
    },
    serialNo:{
        fontFamily : 'Arial',
        fontSize : 20,
        color : '#2C2A29',
        marginLeft : 30,
    },
    repairDate : {
        width : '33%',
        display : 'flex',
        flexDirection : 'row',
        alignItems :'center',
        justifyContent : 'center',
        marginRight : 40,
        marginTop : 45,
    },
    dateIcon:{
        width : '15%',
        marginRight : 15,
    },
    dateText:{
        fontFamily : 'Arial',
        fontSize : 20,
        color : '#2C2A29',
    }
});
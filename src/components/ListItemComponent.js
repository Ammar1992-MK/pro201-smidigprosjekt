import React,{useState,useEffect} from 'react'
import {Text, View, StyleSheet, Image,TouchableOpacity} from "react-native";

const ListItemComponent = ({data,icon,navigation}) => {
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
                setLampImage(require('../../assets/product-images/sunbellIcon.png'));
                break;
            case "Smart Plus":
                setLampImage(require('../../assets/product-images/startplusIcon.png'));
                break;
            case "Sun Turtle":
                setLampImage(require('../../assets/product-images/sunturtleIcon.png'));
                break;
            case "Move Smart":
                setLampImage(require('../../assets/product-images/movesmartIcon.png'));
                break;
        }
    }

    //Navigate and sending data from the clicked list-item to startRepair
    const handleNavigation = () => {
        if(navigation && data.status === "NEW"){
            navigation.navigate("StartRepairScreen", {data : data})
        } else {
            return 0;
        }
    }

    useEffect(() => {
        renderDateIcon();
        renderImage();
    },[])

    return (
        <TouchableOpacity onPress={ () => handleNavigation()}>
            <View style={styles.container}>
                <Image style={styles.lamp} source={lampImage}/>
                <Text style={styles.lampName}>{data.lamp}</Text>
                <Text style={styles.serialNo}>{data.serialNumber}</Text>
                <View style={styles.repairDate}>
                    <Image style={styles.dateIcon} source={dateIcon}/>
                    <Text style={styles.dateText}>{data.date}</Text>
                </View>
            </View>
        </TouchableOpacity>

        )
}

export default ListItemComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor : '#fff',
        marginTop : 4,
        height:  110,
        marginHorizontal: '1%',
        borderColor: 'rgba(23, 74, 91, 0.1)',
        borderWidth: 3,
    },
    lamp:{
        transform: [{ scale: 0.45 }],
        width: '20%'
    },
    lampName : {
        fontFamily : 'Arial',
        fontSize : 22,
        color : '#2C2A29',
        width: '25%'
    },
    serialNo:{
        fontFamily : 'Arial',
        fontSize : 22,
        color : '#2C2A29',
        width: '25%'
    },
    repairDate : {
        flexDirection : 'row',
        alignItems :'center',
        justifyContent : 'center',
        width: '25%'
    },
    dateIcon:{
        marginRight : 15,
        transform: [{ scale: 0.9 }],
    },
    dateText:{
        fontFamily : 'Arial',
        fontSize : 22,
        color : '#2C2A29',
    }
});
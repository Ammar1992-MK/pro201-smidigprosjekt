import React,{useState,useEffect} from 'react';
import {Text, View,Image, StyleSheet} from "react-native";

const SelectedLampSummary = ({lamp,wrench,index,data}) => {
    const [lampImageVisible, setLampImageVisible] = useState(false);
    const [partImageVisible, setPartImageVisible] = useState(false);
    const [wrenchImageVisible, setWrenchImageVisible] = useState(false);


 const handleImage = () => {

     if(wrench){
         setPartImageVisible(true);
         setWrenchImageVisible(true);
     } else {

         setLampImageVisible(true)
     }
 }

 useEffect(handleImage,[])


    return (
        <>
            <View style={SelectedLampSummaryStyles.container}>
                <View style={SelectedLampSummaryStyles.indexContainer}>
                    <Text style={SelectedLampSummaryStyles.indexText}>{index}</Text>
                </View>
                <View style={SelectedLampSummaryStyles.lampImageContainer}>
                    <Image style={[SelectedLampSummaryStyles.selectedLampImage, lampImageVisible ? {display : 'flex'} : {display: 'none'}]} source={require('../../assets/product-images/sunbell-smart-1.png')}/>
                    <Image style={[SelectedLampSummaryStyles.selectedPartImage, partImageVisible ? {display : 'flex'} : {display: 'none'}]} source={require('../../assets/product-images/battery.png')}/>
                    <Image style={[SelectedLampSummaryStyles.greenWrench, wrenchImageVisible ? {display : 'flex'} : {display : 'none'}]} source={require('../../assets/icons/wrench_grren_bg.png')}/>
                </View>
                <View style={SelectedLampSummaryStyles.selectedLampInfoContainer}>
                    <View>
                        <Text style={SelectedLampSummaryStyles.selectedLampName}>Sunbell Smart</Text>
                    </View>
                    <View>
                        <Text style={SelectedLampSummaryStyles.selectedLampRepairId}>REPAIR ID</Text>
                        <Text style={SelectedLampSummaryStyles.selectedLampRepairIdText}>FR2324</Text>
                    </View>
                    <View>
                        <Text style={SelectedLampSummaryStyles.selectedLampSerialNo}>SNR</Text>
                        <Text style={SelectedLampSummaryStyles.selectedLampSerialNoText}>{data.serialNumber}</Text>
                    </View>
                </View>
            </View>
        </>
    )
};
export default SelectedLampSummary;

const SelectedLampSummaryStyles = StyleSheet.create({

    container : {
        width : '90%',
        height : '20%',
        display : 'flex',
        flexDirection :'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginTop : 30,
        borderColor : '#C3DC93',
        borderWidth : 2,
        borderRadius : 10,
        backgroundColor : '#F3F8E9',
    },

    indexContainer : {
        width : 40,
        height : 40,
        display : 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#C3DC93',
        borderRadius: 40/2,
        marginLeft: 30
    },

    indexText : {
        color : '#174A5B',
        fontSize : 30,
    },

    lampImageContainer : {
        width : '30%',
        height : '90%',
        display : 'flex',
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        backgroundColor: '#fff',
        borderRadius : 10,
    },

    selectedLampImage : {
      width : '50%',
        height : '100%',
        marginLeft :50,
    },

    selectedLampInfoContainer : {
        width  :'50%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent :'center'
    },

    selectedLampName : {
        color :'#174A5B',
        fontSize: 30,
        fontWeight : 'bold'

    },
    selectedLampRepairId : {
        color :'#174A5B',
        fontSize: 20,
    },
    selectedLampRepairIdText:{
        color :'#174A5B',
        fontSize: 30,
        fontWeight : 'bold'
    },
    selectedLampSerialNo: {
        color :'#174A5B',
        fontSize: 20,
    },
    selectedLampSerialNoText : {
        color :'#174A5B',
        fontSize: 30,
        fontWeight : 'bold'
    },
    greenWrench : {
      width : '15%',
      height : '20%',
        marginTop: 80,
        marginRight : 20,
    },
    selectedPartImage : {
      width : '70%',
      height : '70%'
    },
});
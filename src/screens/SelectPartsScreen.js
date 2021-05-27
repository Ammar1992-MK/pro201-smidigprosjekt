import React,{useState, useEffect} from 'react';

import {Text,View, StyleSheet,ScrollView,Image,TouchableOpacity} from "react-native";

//COMPONENTS
import SelectedLampSummary from "../components/SelectedLampSummary";
import {NavigationBar} from '../components/NavigationBar/NavigationBar'
import LongButton from "../components/LongButton";


const SelectPartsScreen = ({navigation, route}) => {
    const [userData, setUserData] = useState({});
    const [addedIcon, setAddedIcon] = useState();

    const {data} = route.params;

    const imageArray = [
        require('../../assets/product-images/battery.png'),
        require('../../assets/product-images/circuit_card.png'),
        require('../../assets/product-images/cogs.png'),
        require('../../assets/product-images/light_bulb.png')
    ]

    const handleSelectParts = (e) => {
        if(addedIcon){
            setAddedIcon(false)
        }else {
            setAddedIcon(true);
        }
    }

    const renderImageIntoScrollView = (image,index) => {

        return(
            <TouchableOpacity key={index} style={styles.partImageContainer} onPress={e => handleSelectParts(e)}>
                <Image style={styles.partImage} source={image}/>
                <View style={styles.addIconContainer}>
                    <Image style={addedIcon ? {display :'flex'} : {display: 'none'}} source={require('../../assets/icons/done_teal.png')}/>
                </View>
            </TouchableOpacity>
        )
    }


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
                {imageArray.map((image, index) =>
                    renderImageIntoScrollView(image,index)
                )}
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
        height : '50%',
        display : 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
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
    partImageContainer:{
       display : 'flex',
        flexDirection:'row',
       width : '100%',
        alignItems : 'center',
    },
    addIconContainer:{
       width : '100%',
      marginRight: 200,
    },

});
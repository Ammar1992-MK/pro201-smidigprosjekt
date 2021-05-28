import React,{useState, useEffect} from 'react';

import {Text,View, StyleSheet,ScrollView,Image,TouchableOpacity} from "react-native";

//COMPONENTS
import SelectedLampSummary from "../components/SelectedLampSummary";
import {NavigationBar} from '../components/NavigationBar/NavigationBar'
import LongButton from "../components/LongButton";
import {NextButton} from "../components/NextButton";


const SelectPartsScreen = ({navigation, route}) => {
    const [userData, setUserData] = useState({});
    const [activeButton, setActiveButton] = useState();
    const[selectedPart, setSelectedPart] = useState({});

    const {data} = route.params;
    const imageArray = [
        {
            id: 1,
            image: require('../../assets/product-images/battery.png'),
        },
        {
            id: 2,
            image: require('../../assets/product-images/circuit_card.png')
        },
        {
            id: 3,
            image: require('../../assets/product-images/cogs.png')
        },
        {
            id: 4,
            image: require('../../assets/product-images/light_bulb.png')
        }
    ]

    const handleSelectParts = (id,index) => {
        imageArray.map((image) => {
            if(index === image.id -1) {
                setActiveButton(image.id)
                setSelectedPart(image);
                console.log(imageArray[index])
            }
        })
    }


    const renderImageIntoScrollView = (index,image,id) => {

        return (
            <TouchableOpacity key={index} style={styles.partImageContainer} onPress={() => handleSelectParts(id,index)}>
                {activeButton === id ?
                   <View style={styles.partImageView}>
                       <Image style={styles.partImage} source={image}/>
                       <Image source={require('../../assets/icons/done_teal.png')}/>
                   </View>
                    :
                    <View>
                        <Image style={styles.partImage} source={image}/>
                    </View>
                }
            </TouchableOpacity>
        )
    }


    useEffect(() => {
        setUserData(data);
    }, [])

    return (
        <View style={styles.container}>
            <NavigationBar navigation={navigation}/>
            <SelectedLampSummary wrench={true} data={userData} index={"1"}/>
            {/*Missing onPress to navigate to LEARN*/}
            <LongButton title={"CHANGE PART GUIDE"} backgroundColor={'primary_teal'} icon={'learn'}
                        textColor={'white'}/>
            <ScrollView style={styles.scrollContainer}
                        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.scrollHeader}>
                    <View style={styles.stepIndex}><Text style={styles.stepIndexTitle}>2</Text></View>
                    <Text style={styles.scrollHeaderTitle}>SELECT PART</Text>
                    <Image style={styles.repairIcon} source={require('../../assets/icons/wrench_grren_bg.png')}/>
                </View>
                {imageArray.map((image, index) =>
                    renderImageIntoScrollView(index, image.image,image.id)
                )}
            </ScrollView>
            <NextButton onPress={ () => navigation.navigate('StartRepairSummaryScreen', {data : selectedPart})}/>
        </View>
    )

}


export default SelectPartsScreen;

{/*
<Image style={styles.partImage} source={image}/>
                    <Image style={addedIcon ? {display : 'flex'} : {display: 'none'}} source={require('../../assets/icons/done_teal.png')}/>
*/}

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
        width: '100%',
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
        flexDirection:'column',
       width : '100%',
        alignItems : 'center',
    },

    partImageView:{
      width : '100%',
        backgroundColor :'blue',
    },

});
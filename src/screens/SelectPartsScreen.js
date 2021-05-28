import React,{useState, useEffect} from 'react';

import {Text,View, StyleSheet,ScrollView,Image,TouchableOpacity} from "react-native";

//COMPONENTS
import SelectedLampSummary from "../components/SelectedLampSummary";
import {NavigationBar} from '../components/NavigationBar/NavigationBar'
import LongButton from "../components/LongButton";
import {NextButton} from "../components/NextButton";
import {spareParts} from "../utils/fakeDb";


const SelectPartsScreen = ({navigation, route}) => {
    const [userData, setUserData] = useState({});
    const[selectedPartId, setSelectedPartId] = useState([]);

    const {data} = route.params;

    useEffect(() => {
        setUserData(data);
    }, [])

    const toggle_selected = (el_id) => {
        if(selectedPartId.includes(el_id)){
            let prev_selected = selectedPartId.slice()
            prev_selected.splice(prev_selected.indexOf(el_id), 1)
            setSelectedPartId(prev_selected)
        } else {
            setSelectedPartId([...selectedPartId, el_id])
        }
    }
    console.log("Selected part ", selectedPartId)
    const spare_parts_div = spareParts.map((el) => {
        const {id, image} = el;
        const is_selected = selectedPartId.includes(id) ? 'Valgt' : 'Ikke valgt'
        return (
            <TouchableOpacity key={id} style={styles.partImageContainer} onPress={() => toggle_selected(id)}>
                <Text>{is_selected}</Text>
                <View style={styles.partImageView}>
                    <Image style={styles.partImage} source={image}/>
                </View>
            </TouchableOpacity>
        )
    })


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
                {spare_parts_div}
            </ScrollView>
            <NextButton onPress={ () => navigation.navigate('StartRepairSummaryScreen', {data: {...data, selectedPartId}})}/>
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
import { size } from 'lodash';
import React,{useState,useEffect} from 'react'
import {View,Text,TextInput,StyleSheet,Image,TouchableOpacity} from "react-native";
//Components
import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import ScrollViewSearchList from "../components/ScrollViewSearchList";
import {getData} from "../utils/helpers";

const SearchRepairScreen = ({navigation}) => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedToggle, setSelectedToggle] = useState("ready");

    const readyData = data.filter((el) => {
        //Filterer ut alle som ikke stemmer med søket eller har status som tilsvarer toggle (nå Ready eller finished).
        let search_status_input;
        switch(selectedToggle){
            case "ready": search_status_input = "NEW"; break;
            case "finished": search_status_input = "DONE"; break;
        }
        if(el.status === search_status_input){
            const search_format = searchTerm.toLowerCase()
            const {serialNumber, lamp, customerName} = el;
            const serial_num_match = serialNumber ? serialNumber.toString().toLowerCase().includes(search_format) : false;
            const lamp_match = lamp ? lamp.toString().toLowerCase().includes(search_format.toLowerCase()) : false;
            const customerName_match = customerName ? customerName.toString().toLowerCase().includes(search_format) : false;
            if(searchTerm === ""){
                return el
            }else if(serial_num_match || lamp_match || customerName_match){
                return el
            }
        }
    })

    useEffect(() => {
        getData().then(data => setData(data));
    },[]);

    return (
        <>
            <NavigationBar navigation={navigation} title="SEARCH REPAIR"/>
              <View  style= {styles.container} >
                <View style={styles.searchContainer}>
                    <View style={styles.searchTitleContainer}>
                        <Text style={styles.searchTitle}>Search repair</Text>
                    </View>
                    <View style={styles.searchInputContainer}>
                        <TextInput style={styles.input} onChangeText={searchTerm => setSearchTerm(searchTerm)}/>
                        <Image style={styles.searchIcon} source={require('../../assets/icons/search.png')}/>
                    </View>
                </View>
                <View style={styles.fetchButtonsContainer}>
                    <TouchableOpacity style={[styles.readyButton, selectedToggle === "ready" ? {backgroundColor: '#174A5B'} : {backgroundColor: '#fff'}]} onPress={() => setSelectedToggle('ready')} >
                        <Text style={[styles.readyText, selectedToggle === "ready" ? {color: '#fff'} : {color: '#174A5B'}]}>READY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.finishedButton, selectedToggle === "finished" ? {backgroundColor: '#174A5B'} : {backgroundColor: '#fff'}]} onPress={() => setSelectedToggle('finished')}>
                        <Text style={[styles.finishedText, selectedToggle === "finished" ? {color: '#fff'} : {color: '#174A5B'} ]}>FINISHED</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchItemList}>
                    <ScrollViewSearchList data={readyData} icon={'search'} navigation={navigation}/>
                </View>
            </View>
        </>
    )
}

export default SearchRepairScreen;

    const styles = StyleSheet.create({
        container : {
        flex: 1,
        backgroundColor: "#B7D38135",
        alignItems : 'center',
        height :'100%',
        },
        searchContainer:{
        width : '100%',
        height : '30%',
        flexDirection : 'column',
        alignItems :'center',
        justifyContent :'center',
        },
        searchTitleContainer:{
        width: '80%',
        },
        searchTitle:{
        fontSize : 24,
        color : '#174A5B',
        marginLeft: 28,
        fontFamily: 'Arial'
        },
        searchInputContainer : {
        width : '80%',
        height : 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'space-evenly',
        backgroundColor: '#fff',
        marginTop : 4,
        borderWidth : 3,
        borderColor : 'rgba(23, 74, 91, 0.25)',
        borderRadius : 50,
        fontSize: 18
        },
        searchIcon:{
        marginRight: 4,
        transform: [{ scale: 0.75 }],
        },
        input:{
        width : '70%',
        height : '100%',
        fontSize: 32,
        color: '#2C2A29',
        fontFamily: 'Arial'
        },
        fetchButtonsContainer:{
        width : '100%',
        height : 80,
        flexDirection : 'row',
        alignItems :'center',
        borderBottomWidth : 3,
        borderBottomColor : '#174A5B',
        },
        readyButton : {
        flex:1,
        height : '100%',
        alignItems :'center',
        justifyContent : 'center',
        backgroundColor : '#fff'
        },
        finishedButton:{
        flex: 1,
        height : '100%',
        alignItems :'center',
        justifyContent : 'center',
        backgroundColor : '#fff',
        },
        readyText:{
        fontFamily : 'ArialBold',
        color : '#174A5B',
        fontSize : 28,
        },
        finishedText:{
        fontFamily : 'ArialBold',
        color : '#174A5B',
        fontSize : 28,
        },
        searchItemList: {
        width: '100%',
        alignItems:  'center',
        backgroundColor: 'rgba(23, 74, 91, 0.1)'
        }
    });
import React,{useState,useEffect} from 'react'
import {View,Text,TextInput,StyleSheet,Image,TouchableOpacity} from "react-native";
import {NavigationBar} from "../components/NavigationBar/NavigationBar";

//firebase db
import db from "../firebase/firebaseDb";
import ScrollViewSearchList from "../components/ScrollViewSearchList";
import {getData} from "../utils/helpers";

const SearchRepairScreen = ({navigation}) => {

    const [readyData, setReadyData] = useState([]);
    const [finishedData, setFinishedData] = useState([]);
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchButton = () => {
        if(searchTerm.length >= 1 ){
          return  <TouchableOpacity style={[Styles.searchButton,{backgroundColor: '#C3DC93'}]} disabled={false}>
                <Text style={Styles.searchText}>SEARCH</Text>
            </TouchableOpacity>
        } else if(searchTerm.length < 4){
            return <TouchableOpacity style={[Styles.searchButton, {backgroundColor: 'lightgrey'}]} disabled={true}>
                <Text style={Styles.searchText}>SEARCH</Text>
            </TouchableOpacity>
        }
    }

    const fetchReadyRepairs = () =>{
        data.map((el) => {
            if(el.status === 'NEW' && readyData.length === 0){
                setReadyData((readyData) => [...readyData, el]);
            }
        })
    }

    useEffect(() => {
        getData().then(data => setData(data))
        fetchReadyRepairs()
    },[]);

    return (
        <>
            <NavigationBar navigation={navigation}/>
            <View  style= {Styles.container} >
                <View style={Styles.searchContainer}>
                    <View style={Styles.searchTitleContainer}>
                        <Text style={Styles.searchTitle}>Search repair</Text>
                    </View>
                    <View style={Styles.searchInputContainer}>
                        <TextInput style={Styles.input} onChangeText={searchTerm => setSearchTerm(searchTerm)}/>
                        <Image style={Styles.searchIcon} source={require('../../assets/icons/search.png')}/>
                    </View>
                </View>
                <View style={Styles.buttonsContainer}>
                    <TouchableOpacity style={Styles.scanButton}>
                        <Text style={Styles.scanText}>SCAN</Text>

                        <Image style={Styles.scanIcon} source={require('../../assets/icons/qr_code_scanner.png')}/>
                    </TouchableOpacity>
                    {searchButton()}
                </View>

                <View style={Styles.fetchButtonsContainer}>
                    <TouchableOpacity style={Styles.readyButton}onPress={() => fetchReadyRepairs()} >
                        <Text style={Styles.readyText}>READY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.finishedButton} >
                        <Text style={Styles.finishedText}>FINISHED</Text>
                    </TouchableOpacity>
                </View>
                <ScrollViewSearchList data={readyData}/>
            </View>
        </>

    )
}

export default SearchRepairScreen;

    const Styles = StyleSheet.create({
        container : {
            backgroundColor: "#F3F8E9",
            flex: 1,
            flexDirection: "column",
            alignItems  : 'center',
            height :'100%',
        },
        searchContainer:{
          width : '80%',
          height : '25%',
            display : 'flex',
            flexDirection : 'column',
            alignItems :'center',
            justifyContent :'center'
        },
        searchTitleContainer:{
            width : '30%',
            height : '20%',
            marginRight : '50%',
        },
        searchTitle:{
            fontSize : 20,
            color : '#174A5B',

        },
        searchInputContainer : {
            width : '80%',
            height : '40%',
            display : 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent : 'space-evenly',
            backgroundColor: '#fff',
            marginTop : 40,
            borderWidth : 1,
            borderColor : '#174A5B',
            borderStyle : 'solid',
            borderRadius : 25,
        },
        searchIcon:{
            width : '13%',
            height :'100%',
            marginRight: 10,
        },
        input:{
            width : '70%',
            height : '100%',
            fontSize: 43,
        },
        scanButton:{
          backgroundColor : '#174A5B',
            width : '25%',
            height : '55%',
            display:'flex',
            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'space-evenly',
            borderRadius: 10,
            marginLeft : 20,
        },
        searchButton:{
            width : '50%',
            height : '55%',
            display : 'flex',
            flexDirection : 'row',
            alignItems :'center',
            justifyContent : 'center',
            borderWidth: 2,
            borderColor: '#9FD18B',
            borderRadius: 10,
        },
        buttonsContainer:{
            width : '80%',
            height: '20%',
            display : 'flex',
            flexDirection : 'row',
            alignItems :'center',
            justifyContent :'space-evenly',
        },
        searchText:{
            color : '#174A5B',
            fontFamily:'ArialBold',
            fontSize : 25,
        },
        scanText : {
            color : '#fff',
            fontFamily:'ArialBold',
            fontSize : 25,
        },
        scanIcon:{
            width : '30%',
            height :'70%',
        },
        fetchButtonsContainer:{
            width : '100%',
            height :'15%',
            display : 'flex',
            flexDirection : 'row',
            alignItems :'center',
            justifyContent : 'space-evenly',
            borderBottomWidth : 3,
            borderBottomColor : '#174A5B',
        },
        readyButton : {
            width : '50%',
            height : '100%',
            display : 'flex',
            flexDirection : 'row',
            alignItems :'center',
            justifyContent : 'center',
            backgroundColor : '#fff'
        },
        finishedButton:{
            width : '50%',
            height : '100%',
            display : 'flex',
            flexDirection : 'row',
            alignItems :'center',
            justifyContent : 'center',
            backgroundColor : '#fff',
        },

        readyText:{
            fontFamily : 'ArialBold',
            color : '#174A5B',
            fontSize : 30,
        },

        finishedText:{
            fontFamily : 'ArialBold',
            color : '#174A5B',
            fontSize : 30,
        },

    });
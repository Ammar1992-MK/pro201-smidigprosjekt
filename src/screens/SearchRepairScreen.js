import React from 'react'
import {View,Text,TextInput,StyleSheet,Image,TouchableOpacity} from "react-native";
import {NavigationBar} from "../components/NavigationBar/NavigationBar";

const SearchRepairScreen = ({navigation}) => {

    return (
        <View style={Styles.container}>
            <NavigationBar navigation={navigation}/>
            <View style={Styles.searchContainer}>
                <View style={Styles.searchTitleContainer}>
                    <Text style={Styles.searchTitle}>Search repair</Text>
                </View>
                <View style={Styles.searchInputContainer}>
                    <TextInput style={Styles.input}/>
                    <Image style={Styles.searchIcon} source={require('../../assets/icons/search.png')}/>
                </View>
            </View>
            <View style={Styles.buttonsContainer}>
                <TouchableOpacity style={Styles.scanButton}>
                    <Text style={Styles.scanText}>SCAN</Text>
                    <Image style={Styles.scanIcon} source={require('../../assets/icons/qr_code_scanner.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.searchButton}>
                    <Text style={Styles.searchText}>SEARCH</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchRepairScreen;

    const Styles = StyleSheet.create({
        container : {
            backgroundColor: "#F3F8E9",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            height :'100%'
        },
        searchContainer:{
          width : '80%',
          height : '15%',
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
            height : '35%',
            display:'flex',
            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'space-evenly',
            borderRadius: 10,
            marginLeft : 20,
        },
        searchButton:{
            backgroundColor : '#C3DC93',
            width : '50%',
            height : '35%',
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
        }

    });
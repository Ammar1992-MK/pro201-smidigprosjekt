import React,{useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export const HomeScreenButton = (props, {onPress}) => {

    const add = require("../../assets/icons/add.png");
    const search = require("../../assets/icons/search.png");
    const upload = require("../../assets/icons/file_upload.png");
    const school = require("../../assets/icons/school.png")
    let icon;

    switch(props.icon){
        case("add"):
            icon = add;
            break;
        case("search"):
            icon = search
            break;
        case("school"):
            icon = school
            break;
        case("upload"):
            icon = upload
            break;
    }

    return (
        <TouchableOpacity style={HomeScreenButtonStyle.container} onPress={onPress}>
            <View style={HomeScreenButtonStyle.button}>
                <View style={HomeScreenButtonStyle.innerContainer}>
                    <Image style={HomeScreenButtonStyle.icon}  source={icon}/>
                    <Text style={HomeScreenButtonStyle.title}>{props.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const HomeScreenButtonStyle = StyleSheet.create({

    container : {
        width : '65%',
        height : '13%',
    },
    button: {
        width : '100%',
        height: '100%',
        display : 'flex',
        justifyContent : 'center',
        backgroundColor: "#B7D381",
        borderRadius : 10
    },
    innerContainer:{
        display: 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        width : '40%',
        marginLeft : '10%'
    },
    title:{
        fontSize : 30,
        color: '#174A5B',
        fontWeight : 'bold'
    },
    icon : {
        width : 50,
        height : 50,
    }
});
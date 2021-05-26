import React, {useState} from "react";
import {View, TouchableOpacity, Button, StyleSheet, Image} from "react-native";

//Components

import {HomeScreenButton} from "../components/HomeScreenButton"
import {BrightTitle} from "../components/BrightTitle";

import {UserMenu} from "../components/UserMenu/UserMenu";
import {UserButton} from "../components/UserMenu/UserButton";


const HomeScreen = ({navigation}) => {

    //Boolean to toggle the view which contains the user
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <View style={HomeScreenStyles.container}>
            <UserButton setShowUserMenu={setShowUserMenu}/>
            <BrightTitle/>
            {showUserMenu ? <UserMenu navigation={navigation} setShowUserMenu={setShowUserMenu}/> : null}
            <HomeScreenButton icon={"add"} title={"ADD NEW"} onPress={() => navigation.navigate('CustomerFormScreen')}/>
            <HomeScreenButton icon={"search"} title={"SEARCH"}/>
            <HomeScreenButton icon={"upload"} title={"UPLOAD"}/>
            <HomeScreenButton icon={"school"} title={"LEARN"}/>
        </View>
    )
};

const HomeScreenStyles = StyleSheet.create({
    container: {
        backgroundColor: "#174A5B",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userButton: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
})

export default HomeScreen;

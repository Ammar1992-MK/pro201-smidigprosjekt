import React from "react";
import {View, Text, StyleSheet} from "react-native";

//Components
import CardSmall from "../components/CardSmall";

import {HomeScreenButton} from "../components/HomeScreenButton"
import {BrightTitle} from "../components/BrightTitle";

const HomeScreen = () => {
    return (
        <View style={HomeScreenStyles.container}>
            <BrightTitle/>
            <HomeScreenButton icon={"add"} title={"ADD NEW"}/>
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
    }
})

export default HomeScreen;
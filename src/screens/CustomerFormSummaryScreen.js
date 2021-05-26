import React from 'react';

import {View, Text, StyleSheet} from "react-native";
import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import CardSmall from "../components/Cards/CardSmall";


const CustomerFormSummaryScreen = ({navigation}) => {
    const styles = StyleSheet.create({
       container: {

       }
    });

    return (
        <>
            <NavigationBar navigation={navigation}/>
            <View>
                <CardSmall />
            </View>
        </>
    );
}

export default CustomerFormSummaryScreen
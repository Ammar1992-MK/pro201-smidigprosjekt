import React from 'react';
import {View, Image, Dimensions, StyleSheet, ScrollView} from "react-native";
import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import PdfReader from "rn-pdf-reader-js";

const TroubleshootScreen = ({navigation}) => {
    return (
        <>
            <NavigationBar title="TROUBLESHOOT" icon={true} navigation={navigation} />
            <PdfReader
                source={{
                    uri: 'http://www.africau.edu/images/default/sample.pdf',
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    image: {
        height: '100%',
        width: '100%'
    }
})

export default TroubleshootScreen;
import React from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native";
import ListItemComponent from "./ListItemComponent";

const ScrollViewSearchList = () => {

    const lampImage = require('../../assets/product-images/sunbell-smart-1.png')
    const testData  = [
        {
            key : 1,
            image : lampImage,
            lampName : 'Sunbell Smart',
            snr : '111-222-333',
            date : '31.05.21'
        },
        {
            key : 2,
            image : lampImage,
            lampName : 'Sunbell Smart',
            snr : '111-222-333',
            date : '31.05.21'
        },
        {
            key : 3,
            image : lampImage,
            lampName : 'Sunbell Smart',
            snr : '111-222-333',
            date : '31.05.21'
        },
        {
            key: 4,
            image : lampImage,
            lampName : 'Sunbell Smart',
            snr : '111-222-333',
            date : '31.05.21'
        },
        {
            key : 5,
            image : lampImage,
            lampName : 'Sunbell Smart',
            snr : '111-222-333',
            date : '31.05.21'
        },
        {
            key : 6,
            image : lampImage,
            lampName : 'Sunbell Smart',
            snr : '111-222-333',
            date : '31.05.21'
        }

    ]


    return (
        <View style={Styles.container}>
            <FlatList
                data={testData}
                renderItem = {({item}) => (
                    <ListItemComponent data={item} icon={"upload"}/>
                )}

            />
        </View>
    )
}
export default ScrollViewSearchList;

const Styles = StyleSheet.create({
   container : {
       width : '100%',
       height : '70%',
       display : 'flex',
       flexDirection : 'column',
       alignItems : 'center',
   },
});
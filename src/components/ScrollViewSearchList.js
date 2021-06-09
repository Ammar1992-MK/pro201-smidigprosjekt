import React from 'react'
import {View, Text, FlatList, StyleSheet} from "react-native";
import ListItemComponent from "./ListItemComponent";

const ScrollViewSearchList = ({data,icon,navigation}) => {

    return (
        <View style={styles.container}>
            <FlatList
                scrollEnabled={false}
                style={styles.flatlist}
                data={data}
                renderItem={({item}) => (
                    <ListItemComponent data={item} icon={icon} navigation={navigation}/>
                )}
            />
        </View>
    )
}
export default ScrollViewSearchList;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        padding: 5,
    },
    flatlist: {
        width: '100%',
        marginHorizontal: '5%'
    }
});
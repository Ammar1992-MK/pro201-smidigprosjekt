import {Text, View, Image, StyleSheet, ScrollView} from "react-native";
import React from "react";
import {get_spare_part_by_id} from "../utils/fakeDb";

const ComponentsChosenSummary = ({selectedComponentsId}) => {

    //Selected componentsId is either an array of component IDs, or the string 'discard'
    let parts_images;
    if(!selectedComponentsId){

        //Hvis noe galt har skjedd får den ikke inn noe via selectedComponentsId variablen, tetter fallgruve.
        parts_images = <Text>Fikk ingenting av forrige skjerm</Text>

    } else if (selectedComponentsId === "DISCARD"){
        //TODO Legge til bilde av en søppelkasse eller noe, for å vise at den skal kastes.

       parts_images = 
            <View style={styles.discardImageContainer}>
                <Image style={styles.discardImage} source={require('../../assets/icons/trash_red_bg.png')} />
            </View>
    } else {
        parts_images = selectedComponentsId.map((compId, index) => {
            let component = get_spare_part_by_id(compId)
            const {image} = component
            if(!image){
                throw new Error("Error")
            }
            return <View key={index} style={styles.componentImageContainer}>
                    <Image source={image} style={styles.selectedLampImage} />
                    <Image source={require('../../assets/icons/wrench_grren_bg.png')} style={styles.repairIcon} />
                </View>
        })
    }

    return (

        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.indexText}>2</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.componentsContainer}>
                {parts_images}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '82%',
        height: 160,
        marginTop: 12,
        borderColor: 'rgba(195, 220, 147, 0.35)',
        borderWidth: 4,
        borderRadius: 18,
        backgroundColor: '#F3F8E9'
    },
    indexContainer: {
        width: 42,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        backgroundColor: '#C3DC93',
        borderRadius: 40 / 2,
        marginLeft: 30
    },
    indexText: {
        color: '#174A5B',
        fontSize: 28,
        fontFamily: 'Arial',
        fontWeight: '700'
    },
    componentsContainer: {
        width: '100%',
        height: '94%',
        alignItems: 'center',
        marginLeft: 40
    },
    componentImageContainer: {
        width: '23%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 18,
        borderColor: 'rgba(195, 220, 147, 0.15)',
        borderWidth: 3,
        borderStyle: 'solid',
        marginLeft: 12,
        overflow: 'hidden',
        position: 'relative'
    },
    selectedLampImage: {
        width : '90%',
        height : '90%'
    },
    repairIcon: {
        position: 'absolute',
        bottom: 3,
        right: 3
    },
    discardImageContainer: {
        width: '23%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12,
    },
})

export default ComponentsChosenSummary
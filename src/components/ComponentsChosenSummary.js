import {Text, View, Image, StyleSheet, ScrollView} from "react-native";
import React from "react";
import {get_spare_part_by_id} from "../utils/fakeDb";

const ComponentsChosenSummary = ({selectedComponentsId}) => {
    //Selected componentsId is either an array of component IDs, or the string 'discard'
    let parts_images;
    if(!selectedComponentsId){
        //Hvis noe galt har skjedd får den ikke inn noe via selectedComponentsId variablen, tetter fallgruve.
        parts_images = <Text>Fikk ingenting av forrige skjerm</Text>
    }
    else if(selectedComponentsId === "DISCARD"){
        //TODO Legge til bilde av en søppelkasse eller noe, for å vise at den skal kastes.
        parts_images = <Text>Ikke lagt opp til kasteikon enda</Text>
    }else {
        parts_images = selectedComponentsId.map((compId, index) => {
            let component = get_spare_part_by_id(compId)
            const {image} = component
            if(!image){
                throw new Error("No pic no screen homie")
            }
            return <View key={index} style={style.lampImageContainer}>
                <Image source={image} style={style.selectedLampImage} />
                <Image source={require('../../assets/icons/wrench_grren_bg.png')} style={style.repairIcon} />
                </View>
        })
    }

    return (
        <View style={style.container}>
                <View style={style.indexContainer}>
                    <Text style={style.indexText}>2</Text>
                </View>
                {/* <View style={style.lampImageContainer}> */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={style.componentsContainer}>
                        {parts_images}
                    </ScrollView>
                {/* </View> */}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 160,
        marginLeft: 40,
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
    lampImageContainer: {
        width: '23%',
        height: '100%',
        display : 'flex',
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
    }
})

export default ComponentsChosenSummary
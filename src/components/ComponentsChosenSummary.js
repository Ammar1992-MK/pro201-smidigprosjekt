import {Text, View, Image, StyleSheet, ScrollView} from "react-native";
import React from "react";
import {get_spare_part_by_id} from "../utils/fakeDb";

const ComponentsChosenSummary = ({selectedComponentsId}) => {
    //Selected componentsId is either a array of component IDs, or the string 'discard'
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
            return <View key={index} style={style.comp_container}><Image source={image} style={style.image} /></View>
        })
    }

    return (
        <View style={style.container}>
            <View style={style.indexCont}>
                <Text style={style.indexText}>2</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {parts_images}
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    indexCont: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    indexText: {
        color: '#174A5B',
        fontSize: 28,
        fontFamily: 'Arial',
        fontWeight: '700'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        height: 210,
        padding: 25,
        marginLeft: 40,
        marginTop: 40,
        borderColor: 'rgba(195, 220, 147, 0.35)',
        borderWidth: 4,
        borderRadius: 18,
        backgroundColor: '#F3F8E9'
    },
    comp_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: 200,
        height: '100%'
    },
    image: {
        width: "95%",
        height: "100%",
        borderRadius: 20
    }
})

export default ComponentsChosenSummary
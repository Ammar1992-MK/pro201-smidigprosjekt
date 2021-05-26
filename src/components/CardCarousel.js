import * as React from "react";
import {StyleSheet, ScrollView} from "react-native";

import CarouselCard from './CarouselCard';
import CardSmall from "./Cards/CardSmall";

const CardCarousel = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CarouselCard lamp={"smartPlus"}/>
            <CarouselCard lamp={"sunbellSmart"}/>
            <CarouselCard lamp={"lamp3"}/>
            <CarouselCard lamp={"lamp4"}/>
        </ScrollView>
    )
};

const CardCarouselStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 100,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 6,
        width: '33%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        margin: 50,
    },
    text: {
        backgroundColor: '#174A5B',
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        paddingHorizontal: 20,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        alignSelf: 'stretch',
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
        margin: 10,
    }
});

export default CardCarousel;

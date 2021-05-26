import React from 'react'
import {View, StyleSheet, Image} from "react-native";

const CarouselCard = (props) => {

    const SmartPlus = require("../../assets/product-images/smart-plus-1.png");
    const SunbellSmart = require("../../assets/product-images/sunbell-smart-1.png");
    const Lamp3 = require("../../assets/product-images/smart-plus-1.png");
    const Lamp4 = require("../../assets/product-images/sunbell-smart-1.png")
    let lamp;

    switch (props.lamp) {
        case("smartPlus"):
            lamp = SmartPlus;
            break;
        case("sunbellSmart"):
            lamp = SunbellSmart
            break;
        case("lamp3"):
            lamp = Lamp3
            break;
        case("lamp4"):
            lamp = Lamp4
            break;
    }


    return (
        <View style={CarouselCardStyles.container}>
            <Image
                style={CarouselCardStyles.image}
                source={lamp}/>
        </View>
    )
};

const CarouselCardStyles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        flex: 1,
        height: 145,
        width: 145,
        margin: 20,
        justifyContent: 'center',
        alignContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    image: {
        transform: [{scale: 0.5}],
    }
});

export default CarouselCard;

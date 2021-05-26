import * as React from 'react';
import {View, TouchableOpacity, Image} from "react-native";

export const NavigationHomeButton = ({navigation, style}) => {
    const HomeImage = () => {
        return (
            <Image source={require('../../../assets/icons/house_with_text.png')}/>
        )
    }

    return (
        <View style={style}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <HomeImage />
            </TouchableOpacity>
        </View>
    );
}


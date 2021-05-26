import * as React from 'react';
import {View, TouchableOpacity, Image} from "react-native";

export const NavigationHomeButton = ({ navigation}) => {
    const HomeImage = () => {
        return(
            <Image source={require('../../../assets/icons/house_with_text.png')} />
        )
    }

    return (
        <View style={{marginLeft: 40}}>
            <TouchableOpacity  onPress={() => navigation.navigate('LoginScreen')}>
                <HomeImage  />
            </TouchableOpacity>
        </View>
    );
}


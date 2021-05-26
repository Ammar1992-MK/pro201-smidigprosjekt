import React from 'react';
import {Alert, StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";


//Image in the top left corner
const CloseImage = ({setShowUserMenu}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => setShowUserMenu(false)}>
                <Image source={require('../../../assets/icons/close.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const UserImage = () => {
    return (
        <View>
            <TouchableOpacity onPress={ () => Alert.alert('Hey user!', 'This is your user page, enjoy it')}>
                <Image source={require('../../../assets/icons/avatar_dark_version.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const SignOutButton = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            backgroundColor: '#174A5B',
            borderRadius: 10,
            marginTop: 'auto',
            marginBottom: 100,
            width: '70%',
            alignSelf: 'center',
            alignItems: 'center',
            padding: 20
        },
        text: {
            fontSize: 30,
            fontWeight: 'bold',
            color: '#fff'
        }
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.text}>SIGN OUT</Text>
            </TouchableOpacity>
        </View>
    )
}

export const UserMenu = ({setShowUserMenu, navigation}) => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            height: '100%',
            width: '70%',
            backgroundColor: '#FBF6ED',
            position: 'absolute',
            right: 0,
            zIndex: 1
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10
            }}>
                <CloseImage setShowUserMenu={setShowUserMenu} navigation={navigation}/>
                <UserImage />
            </View>
            <SignOutButton navigation={navigation}/>
        </View>
    );
}

import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//Components
import { NavigationHomeButton } from "./NavigationHomeButton";

export const NavigationBar = ({ navigation }) => {
  return (
    <View style={NavigationBarStyles.container}>
      <View style={NavigationBarStyles.iconContainer}>
        <NavigationHomeButton
          style={NavigationBarStyles.button}
          navigation={navigation}
        />
      </View>
      <View style={NavigationBarStyles.titleContainer}>
        <Text style={NavigationBarStyles.title}>NEW REPAIR</Text>
      </View>
    </View>
  )
}

const NavigationBarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 140,
        backgroundColor: '#174A5B',
        alignItems: 'center',
        zIndex: 99,
    },
    title: {
        fontSize: 32,
        fontFamily: 'ArialBold',
        letterSpacing: 2,
        color: '#fff',
        textTransform: "uppercase"
    },
    button: {},
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    titleContainer: {
        flex: 7,
        alignItems: 'center',
        paddingRight: '13%'
    }
})

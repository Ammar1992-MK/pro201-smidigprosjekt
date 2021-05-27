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
  );
};

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
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {},
    iconContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 3.5,
        alignItems: 'flex-start'
    }
})

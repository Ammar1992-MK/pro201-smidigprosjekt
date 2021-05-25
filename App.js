import 'react-native-gesture-handler';
import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

//Screens
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

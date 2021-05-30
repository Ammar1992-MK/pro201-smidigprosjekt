import React, {useState, useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Dimensions, View, Text} from "react-native";
import {useFonts} from 'expo-font';

const Stack = createStackNavigator();

//Screens
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CustomerFormScreen from "./src/screens/CustomerFormScreen";
import CustomerFormSummaryScreen from "./src/screens/CustomerFormSummaryScreen";

import StartRepairScreen from "./src/screens/StartRepairScreen";
import SelectPartsScreen from "./src/screens/SelectPartsScreen";
import StartRepairSummaryScreen from "./src/screens/StartRepairSummaryScreen";

import LearnHomeScreen from "./src/screens/LearnHomeScreen";

const App = () => {

    //Use fonts hook
    const [loaded] = useFonts({
        Arial: require('./assets/fonts/arial.ttf'),
        ArialBold: require('./assets/fonts/arialbold.ttf'),
        Montserrat: require('./assets/fonts/montserrat.ttf'),
        MontserratMedium: require('./assets/fonts/montserratmedium.ttf')
    });

    if(!loaded){
        return null;
    }

    //Rendering app
    return (
        <NavigationContainer
            style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
            <Stack.Navigator>
                {/* LOGIN SCREEN */}
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
                {/* MENU/HOME SCREEN */}
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{headerShown: false}}
                />
                {/* CUSTOMER FORM SCREEN */}
                <Stack.Screen
                    name="CustomerFormScreen"
                    component={CustomerFormScreen}
                    options={{headerShown: false}}
                />
                {/* CUSTOMER FORM SUMMARY SCREEN */}
                <Stack.Screen
                    name="CustomerFormSummaryScreen"
                    component={CustomerFormSummaryScreen}
                    options={{headerShown: false}}
                />
                {/* START REPAIR SCREEN */}
                <Stack.Screen
                    name="StartRepairScreen"
                    component={StartRepairScreen}
                    options={{headerShown: false}}
                />
                {/* SELECT PARTS SCREEN (WHERE YOU HAVE A LIST OF SPARE PARTS) */}
                <Stack.Screen
                    name="SelectPartsScreen"
                    component={SelectPartsScreen}
                    options={{headerShown: false}}
                />
                {/* START REPAIR SUMMARY SCREEN (FINAL PAGE) */}
                <Stack.Screen
                    name="StartRepairSummaryScreen"
                    component={StartRepairSummaryScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="LearnHomeScreen"
                    component={LearnHomeScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

//Screens
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CustomerFormScreen from "./src/screens/CustomerFormScreen";
import CustomerFormSummaryScreen from "./src/screens/CustomerFormSummaryScreen";

import StartRepairScreen from "./src/screens/StartRepairScreen";
import SelectPartsScreen from "./src/screens/SelectPartsScreen";
import StartRepairSummaryScreen from "./src/screens/StartRepairSummaryScreen";


export default function App() {
    return (
        <NavigationContainer>
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
                {/* START REPAIR SUMMARY SCREEN (FINAL PAGE) */}
                <Stack.Screen
                    name="StartRepairSummaryScreen"
                    component={StartRepairSummaryScreen}
                    options={{headerShown: false}}
                />
                {/* SELECT PARTS SCREEN (WHERE YOU HAVE A LIST OF SPARE PARTS) */}
                <Stack.Screen
                    name="SelectPartsScreen"
                    component={SelectPartsScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

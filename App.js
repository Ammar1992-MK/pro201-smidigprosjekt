import 'react-native-gesture-handler';
import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {useBackHandler} from '@react-native-community/hooks'

const Stack = createStackNavigator();

//Screens
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CustomerFormScreen from "./src/screens/CustomerFormScreen";
import CustomerFormSummaryScreen from "./src/screens/CustomerFormSummaryScreen";

//Components
import {NextButton} from "./src/components/NextButton";
import {BackButton} from "./src/components/BackButton";
import StartRepairScreen from "./src/screens/StartRepairScreen";
import LongButton from "./src/components/LongButton";

export default function App() {
    return (

     <StartRepairScreen/>

    );
}

{/*
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
            </Stack.Navigator>
        </NavigationContainer>
        */}
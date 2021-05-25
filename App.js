import 'react-native-gesture-handler';
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

//Screens
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import {NextButton} from "./src/components/NextButton";
import {BackButton} from "./src/components/BackButton";

export default function App() {
    return (
        <BackButton/>

    );
}

import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

export const NavigationHomeButton = ({ navigation }) => {
  const HomeImage = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Image
            style={NavigationHomeButtonStyles.icon}
            source={require("../../../assets/icons/house.png")}
          />
          <Text style={NavigationHomeButtonStyles.title}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <HomeImage />
      </TouchableOpacity>
    </View>
  )
}

const NavigationHomeButtonStyles = StyleSheet.create({
  icon: {
    width: 64,
    height: 64,
    marginTop: 8,
  },
  title: {
    fontFamily: "ArialBold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: -6,
  },
});

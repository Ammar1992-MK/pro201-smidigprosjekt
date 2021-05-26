import * as React from "react";
import { View, TouchableOpacity, Image } from "react-native";

export const NavigationHomeButton = ({ navigation }) => {
  const HomeImage = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Image
            source={require("../../../assets/icons/house_with_text.png")}
          />
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
  );
};

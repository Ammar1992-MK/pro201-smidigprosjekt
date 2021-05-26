import { Image, TouchableOpacity, View } from "react-native";
import React from "react";

export const UserButton = ({ setShowUserMenu }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => setShowUserMenu(true)}>
        <Image
          source={require("../../../assets/icons/avatar_light_version.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

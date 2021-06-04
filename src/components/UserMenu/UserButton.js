import React from "react";
import { Image, TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { tan } from "react-native-reanimated";

export const UserButton = ({ setShowUserMenu }) => {
  return (
    <View style={UserButtonStyles.container}>
      <TouchableOpacity onPress={() => setShowUserMenu(true)} 
        style={UserButtonStyles.iconContainer}>
        <Image style={UserButtonStyles.icon}
          source={require("../../../assets/icons/avatar_light_version.png")}
        />
        <Text style={UserButtonStyles.title}>ID: BR2234</Text>
      </TouchableOpacity>
    </View>
  );
};

const UserButtonStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginVertical: 40,
    marginHorizontal: 24
  },
  iconContainer: {
    alignItems: 'center'
  },
  icon: {
    width: 64,
    height: 64,
    marginBottom: 8
  },
  title: {
    textTransform: 'uppercase',
    color: '#FBF6ED',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

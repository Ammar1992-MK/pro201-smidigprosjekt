import React from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

export const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={BackButtonStyles.container} onPress={onPress}>
      <View style={BackButtonStyles.innerContainer}>
        <Image
          style={BackButtonStyles.image}
          source={require("../../assets/icons/arrow_back.png")}
        />
        <Text style={BackButtonStyles.title}>BACK</Text>
      </View>
    </TouchableOpacity>
  );
};

const BackButtonStyles = StyleSheet.create({
  container: {
    width: "33%",
    height: 90,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: 'flex-start',
    backgroundColor: "#174A5B",
    marginRight: "auto",
    marginTop: 24
  },
  innerContainer: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: 8
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontFamily: 'ArialBold',
    letterSpacing: 0.5
  },
  image: {
    width: 56,
    height: 56,
  },
});

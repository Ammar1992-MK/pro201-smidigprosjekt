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
    width: "30%",
    height: "10%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#174A5B",
  },
  innerContainer: {
    display: "flex",
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 60,
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },

  image: {
    width: 63,
    height: 63,
  },
});

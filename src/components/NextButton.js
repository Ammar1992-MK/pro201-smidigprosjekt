import React from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

export const NextButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={NextButtonStyles.container} onPress={onPress}>
      <View style={NextButtonStyles.innerContainer}>
        <Text style={NextButtonStyles.title}>NEXT</Text>
        <Image
          style={NextButtonStyles.image}
          source={require("../../assets/icons/arrow_next.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

const NextButtonStyles = StyleSheet.create({
  container: {
    width: "30%",
    height: "10%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#B7D381",
  },
  innerContainer: {
    display: "flex",
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 60,
    justifyContent: "space-between",
  },
  title: {
    color: "#174A5B",
    fontSize: 32,
    fontWeight: "bold",
  },

  image: {
    width: 63,
    height: 63,
  },
});

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
    width: "33%",
    height: 90,
    marginTop: 24,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: 'flex-end',
    backgroundColor: "#B7D381",
    marginLeft: "auto",
    marginRight: 50,
    borderColor: '#B7D381',
    borderWidth: 3,
    borderStyle: 'solid'
  },
  innerContainer: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
    justifyContent: "space-evenly",
  },
  title: {
    color: "#174A5B",
    fontSize: 28,
    fontFamily: 'ArialBold',
    letterSpacing: 0.5
  },

  image: {
    width: 56,
    height: 56,
  },
});

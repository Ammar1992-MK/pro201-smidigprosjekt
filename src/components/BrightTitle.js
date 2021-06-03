import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export const BrightTitle = () => {
  return (
    <View style={BrightTitleStyles.container}>
      <Text style={BrightTitleStyles.headingText}>BR!GHT</Text>
      <Text style={BrightTitleStyles.lowerText}>LEARN & REPAIR</Text>
    </View>
  );
};

const BrightTitleStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    fontFamily: "Arial",
    justifyContent: "center",
    marginBottom: 30,
  },
  headingText: {
    color: "#9FD18B",
    fontSize: 72,
    fontFamily: "Montserrat",
    marginBottom: -4,
  },
  lowerText: {
    fontFamily: "MontserratMedium",
    color: "#9FD18B",
    fontSize: 32,
  },
});

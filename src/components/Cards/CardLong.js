import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//The card
export const CardLong = ({ lampName, image }) => {
  return (
    <View style={CardSmallStyles.container}>
      <Text style={CardSmallStyles.text}>{lampName || "LAMP NAME"}</Text>
      <View style={CardSmallStyles.innerContainer}>
        <Image
          style={CardSmallStyles.image}
          source={require("../../../assets/product-images/circuit_card.png")}
        />
        <Image
          style={CardSmallStyles.image}
          source={require("../../../assets/product-images/spare_part_movie1.png")}
        />
      </View>
    </View>
  );
};

//STYLING
const CardSmallStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 100,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    margin: 50,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    backgroundColor: "#174A5B",
    color: "#fff",
    fontSize: 25,
    textAlign: "left",
    paddingHorizontal: 20,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    alignSelf: "stretch",
  },
  image: {
    flex: 1,
    width: "auto",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});

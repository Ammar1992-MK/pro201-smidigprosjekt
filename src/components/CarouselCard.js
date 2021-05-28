import React from "react";
import { View, StyleSheet, Image } from "react-native";

const CarouselCard = (props) => {
  const SmartPlus = require("../../assets/product-images/smart-plus-1.png");
  const SunbellSmart = require("../../assets/product-images/sunbell-smart-1.png");
  const Lamp3 = require("../../assets/product-images/smart-plus-1.png");
  const Lamp4 = require("../../assets/product-images/sunbell-smart-1.png");
  let lamp;

  switch (props.lamp) {
    case "smartPlus":
      lamp = SmartPlus;
      break;
    case "sunbellSmart":
      lamp = SunbellSmart;
      break;
    case "lamp3":
      lamp = Lamp3;
      break;
    case "lamp4":
      lamp = Lamp4;
      break;
  }

  return (
    <View style={CarouselCardStyles.container}>
      <Image style={CarouselCardStyles.image} source={lamp} />
    </View>
  );
};

const CarouselCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    height: 160,
    width: 160,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 9
  },
  image: {
    transform: [{ scale: 0.6 }],
  },
});

export default CarouselCard;

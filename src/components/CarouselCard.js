import React from "react";
import { View, StyleSheet, Image } from "react-native";

const CarouselCard = ({ img }) => {
  return (
    <View style={CarouselCardStyles.container}>
      <Image style={CarouselCardStyles.image} source={img} />
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
    elevation: 9,
  },
  image: {
    transform: [{ scale: 0.6 }],
  },
});

export default CarouselCard;

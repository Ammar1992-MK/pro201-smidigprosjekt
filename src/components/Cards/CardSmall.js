import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CardSmall = ({ lampName, image }) => {


  const SmartPlus = require("../../../assets/product-images/smart-plus-1.png");
  const SunbellSmart = require("../../../assets/product-images/sunbell-smart-1.png");
  const MoveSmart = require("../../../assets/product-images/movesmart.png");
  const SunTurtle = require("../../../assets/product-images/sunturtle.png");

  let lamp;

  switch (lampName) {
    case "Smart Plus":
      lamp = SmartPlus;
      break;
    case "Sunbell Smart":
      lamp = SunbellSmart;
      break;
    case "Move Smart":
      lamp = MoveSmart;
      break;
    case "Sun Turtle":
      lamp = SunTurtle;
      break;
  }


  return (
    <View style={CardSmallStyles.container}>
      <Text style={CardSmallStyles.text}>{lampName || "LAMP NAME"}</Text>
      <Image
        style={CardSmallStyles.image}
        source={lamp}
      />
      {/* We need to dynamically change the pictures here? */}
    </View>
  );
};

const CardSmallStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 8,
    width: "33%",
    elevation: 10,
    marginTop: 64,
    marginBottom: 0,
    marginLeft: 74,
    marginRight: 16,
    overflow: 'hidden'
  },
  text: {
    backgroundColor: "#174A5B",
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    paddingVertical: 4,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    alignSelf: "stretch",
    textTransform: 'uppercase',
    fontFamily: 'ArialBold'
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    margin: 10,
  },
});

export default CardSmall;

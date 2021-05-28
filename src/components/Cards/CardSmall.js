import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CardSmall = ({ lampName, image }) => {


  const SmartPlus = require("../../../assets/product-images/smart-plus-1.png");
  const SunbellSmart = require("../../../assets/product-images/sunbell-smart-1.png");
  const Lamp3 = require("../../../assets/product-images/smart-plus-1.png");
  const SunTurtle = require("../../../assets/product-images/sunturtle.png");
  let lamp;

  switch (lampName) {
    case "smartPlus":
      lamp = SmartPlus;
      break;
    case "sunbellSmart":
      lamp = SunbellSmart;
      break;
    case "lamp3":
      lamp = Lamp3;
      break;
    case "sunTurtle":
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
    marginTop: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 6,
    width: "33%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    margin: 20,
  },
  text: {
    backgroundColor: "#174A5B",
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    alignSelf: "stretch",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    margin: 10,
  },
});

export default CardSmall;

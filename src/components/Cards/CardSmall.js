import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CardSmall = ({ lampName, image }) => {


  const SmartPlus = require("../../../assets/product-images/startplusIcon.png");
  const SunbellSmart = require("../../../assets/product-images/sunbellIcon.png");
  const MoveSmart = require("../../../assets/product-images/movesmartIcon.png");
  const SunTurtle = require("../../../assets/product-images/sunturtleIcon.png");

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
    <View style={styles.container}>
      <Text style={styles.text}>{lampName || "LAMP NAME"}</Text>
      <Image
        style={styles.image}
        source={lamp}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
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

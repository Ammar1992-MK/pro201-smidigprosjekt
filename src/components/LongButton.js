import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const LongButton = (props) => {
  const upload = require("../../assets/icons/file_upload.png");
  const learn = require("../../assets/icons/learn_white.png");
  const save = require("../../assets/icons/save.png");
  const repair = require("../../assets/icons/wrench_grren_bg.png");
  const whiteRepair = require("../../assets/icons/wrench_white.png");

  let icon;
  let textColor;
  let backgroundColor;

  switch (props.icon) {
    case "upload":
      icon = upload;
      break;
    case "learn":
      icon = learn;
      break;
    case "save":
      icon = save;
      break;
    case "repair":
      icon = repair;
      break;
    case "whiteRepair":
      icon = whiteRepair;
      break;
  }
  switch (props.textColor) {
    case "white":
      textColor = "#fff";
      break;
    case "primary_teal":
      textColor = "#174A5B";
      break;
  }
  switch (props.backgroundColor) {
    case "primary_green":
      backgroundColor = "#B7D381";
      break;
    case "primary_teal":
      backgroundColor = "#174A5B";
      break;
    case "red":
      backgroundColor = "#CB333B";
      break;
  }

  return (
    <TouchableOpacity
      style={[LongButtonStyles.container, { backgroundColor: backgroundColor }]}
      onPress={props.onPress}
    >
      <View style={LongButtonStyles.imageContainer}>
        <Image style={LongButtonStyles.icon} source={icon} />
      </View>
      <View style={LongButtonStyles.textContainer}>
        <Text style={[LongButtonStyles.title, { color: textColor }]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const LongButtonStyles = StyleSheet.create({
  container: {
    width: "80%",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    position: 'relative',
    backgroundColor: "#B7D381",
    marginTop: 24,
  },
  imageContainer: {
    marginLeft: 30,
    position: 'absolute'
  },
  icon: {
    width: 56,
    height: 56
  },
  textContainer: {
    width: "100%",
  },
  title: {
    width: "100%",
    textAlign: 'center',
    fontFamily: 'ArialBold',
    fontSize: 24,
    letterSpacing: 1,
  },
});

export default LongButton;

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const LongButton = (props) => {
  const upload = require("../../assets/icons/file_upload.png");
  const learn = require("../../assets/icons/learn_white.png");
  const save = require("../../assets/icons/save.png");
  const saveUpload = require("../../assets/icons/save_upload.png");
  const saveUploadDisabled = require("../../assets/icons/save_upload_disabled.png");
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
    case "save_upload":
      icon = saveUpload;
      break;
    case "save_upload_disabled":
      icon = saveUploadDisabled;
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
    case "disabled":
      textColor = "#174A5B45";
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
    case "disabled":
      backgroundColor = "#E6E7E8";
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
    marginTop: 16,
    position: 'relative',
    elevation: 1
  },
  imageContainer: {
    marginLeft: 30,
    position: 'absolute',
    top: 17
  },
  icon: {
    height: 56,
  },
  textContainer: {
    width: "50%",
    marginLeft: 200
    },
  title: {
    width: "100%",
    textAlign: 'left',
    fontFamily: 'ArialBold',
    fontSize: 24,
    letterSpacing: 1,
  },
});

export default LongButton;

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export const HomeScreenButton = (props) => {
  const add = require("../../assets/icons/add.png");
  const search = require("../../assets/icons/search.png");
  const upload = require("../../assets/icons/file_upload.png");
  const school = require("../../assets/icons/repair_guide.png");
  let icon;

  switch (props.icon) {
    case "add":
      icon = add;
      break;
    case "search":
      icon = search;
      break;
    case "school":
      icon = school;
      break;
    case "upload":
      icon = upload;
      break;
  }

  return (
    <TouchableOpacity
      style={HomeScreenButtonStyle.container}
      onPress={props.onPress}
    >
      <View style={HomeScreenButtonStyle.button}>
        <View style={HomeScreenButtonStyle.innerContainer}>
          <Image style={HomeScreenButtonStyle.icon} source={icon} />
          <Text style={HomeScreenButtonStyle.title}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreenButtonStyle = StyleSheet.create({
  container: {
    width: "73%",
    height: "13.5%",
    margin: 20,
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#B7D381",
    borderRadius: 8,
    elevation: 6,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginLeft: "10%",
  },
  title: {
    fontFamily: "ArialBold",
    fontSize: 27,
    color: "#174A5B",
    marginLeft: 40,
  },
  icon: {
    width: 76,
    height: 64,
  },
});

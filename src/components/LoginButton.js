import * as React from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

export const LoginButton = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={LoginButtonStyles.button}>
        <Text style={LoginButtonStyles.text}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

const LoginButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#C3DC93",
    color: "#174A5B",
    textTransform: "uppercase",
    borderRadius: 12,
    width: 500,
    height: 78,
    marginVertical: 48,
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#B7D381',
    borderWidth: 4,
    borderStyle: 'solid'
  },
  text: {
    fontSize: 24,
    color: "#174A5B",
    fontFamily: 'ArialBold',
    letterSpacing: 1,
  },
});

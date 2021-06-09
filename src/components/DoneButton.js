import React from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

export const DoneButton = ({ onPress, differentButton }) => {
  if(differentButton){
    return(
        <TouchableOpacity style={DoneButtonSecondStyles.container} onPress={onPress}>
          <View style={DoneButtonSecondStyles.innerContainer}>
            <Text style={DoneButtonSecondStyles.title}>DONE</Text>
            <Image
                style={DoneButtonSecondStyles.image}
                source={require("../../assets/icons/done_grey.png")}
            />
          </View>
        </TouchableOpacity>
    )
  } else {
    return (
        <TouchableOpacity style={DoneButtonStyles.container} onPress={onPress}>
          <View style={DoneButtonStyles.innerContainer}>
            <Text style={DoneButtonStyles.title}>DONE</Text>
            <Image
                style={DoneButtonStyles.image}
                source={require("../../assets/icons/done_teal.png")}
            />
          </View>
        </TouchableOpacity>
    );

  }

};

const DoneButtonStyles = StyleSheet.create({
  container: {
    width: "33%",
    height: 90,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: 'flex-end',
    backgroundColor: "#174A5B",
    marginTop: 24
  },
  innerContainer: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: 8
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontFamily: 'ArialBold',
    letterSpacing: 0.5
  },
  image: {
    width: 56,
    height: 56,
  },
});
const DoneButtonSecondStyles = StyleSheet.create({
  container: {
    width: "33%",
    height: 90,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: '#C7D0D4',
    backgroundColor: '#DADFE1',
    justifyContent: "center",
    alignItems: 'flex-end',
    marginLeft: "auto",
    marginTop: 24
  },
  innerContainer: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: 8
  },
  title: {
    color: "#9EB3BA",
    fontSize: 28,
    fontFamily: 'ArialBold',
    letterSpacing: 0.5
  },
  image: {
    width: 56,
    height: 56,
  },
})
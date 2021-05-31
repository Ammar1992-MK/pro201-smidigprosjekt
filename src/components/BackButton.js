import React from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

export const BackButton = ({ onPress, differentButton }) => {
  if(differentButton){
    return(
        <TouchableOpacity style={BackButtonSecondStyles.container} onPress={onPress}>
          <View style={BackButtonSecondStyles.innerContainer}>
            <Image
                style={BackButtonSecondStyles.image}
                source={require("../../assets/icons/arrow_backward_blue.png")}
            />
            <Text style={BackButtonSecondStyles.title}>BACK</Text>
          </View>
        </TouchableOpacity>
    )
  } else {
    return (
        <TouchableOpacity style={BackButtonStyles.container} onPress={onPress}>
          <View style={BackButtonStyles.innerContainer}>
            <Image
                style={BackButtonStyles.image}
                source={require("../../assets/icons/arrow_back.png")}
            />
            <Text style={BackButtonStyles.title}>BACK</Text>
          </View>
        </TouchableOpacity>
    );

  }

};

const BackButtonStyles = StyleSheet.create({
  container: {
    width: "33%",
    height: 90,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: 'flex-start',
    backgroundColor: "#174A5B",
    marginRight: "auto",
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
const BackButtonSecondStyles = StyleSheet.create({
  container: {
    width: "33%",
    height: 90,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: '#174A5B',
    justifyContent: "center",
    alignItems: 'flex-start',
    marginRight: "auto",
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
    color: "#174A5B",
    fontSize: 28,
    fontFamily: 'ArialBold',
    letterSpacing: 0.5
  },
  image: {
    width: 56,
    height: 56,
  },
})
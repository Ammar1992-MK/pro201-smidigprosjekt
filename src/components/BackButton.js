import React from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

export const BackButton = ({ onPress, buttonStyle }) => {
  if(buttonStyle  === "disabled"){
    return(
        <TouchableOpacity style={stylesDisabled.container} onPress={onPress}>
          <View style={stylesDisabled.innerContainer}>
            <Image
                style={stylesDisabled.image}
                source={require("../../assets/icons/arrow_backward_blue.png")}
            />
            <Text style={stylesDisabled.title}>BACK</Text>
          </View>
        </TouchableOpacity>
    )
  } else if(buttonStyle === "outlined"){
    return (
        <TouchableOpacity style={stylesOutlined.container} onPress={onPress}>
          <View style={stylesOutlined.innerContainer}>
            <Image
                style={stylesOutlined.image}
                source={require("../../assets/icons/arrow_backward_blue.png")}
            />
            <Text style={stylesOutlined.title}>BACK</Text>
          </View>
        </TouchableOpacity>
    );
  } else {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <View style={styles.innerContainer}>
            <Image
                style={styles.image}
                source={require("../../assets/icons/arrow_back.png")}
            />
            <Text style={styles.title}>BACK</Text>
          </View>
        </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    width: "33%",
    height: 90,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: 'flex-start',
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

const stylesDisabled = StyleSheet.create({
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
  }
})

const stylesOutlined = StyleSheet.create({
  container: {
    width: "33%",
    height: 90,
    borderRadius: 14,
    borderWidth: 4,
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
  }
})
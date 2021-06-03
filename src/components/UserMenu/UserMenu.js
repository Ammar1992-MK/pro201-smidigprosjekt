import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

//Clickable icon in the top left corner
const CloseImage = ({ setShowUserMenu }) => {
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      marginVertical: 40,
      marginHorizontal: 24,
      paddingVertical: 12,
    },
    icon: {
      width: 56,
      height: 56,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowUserMenu(false)}>
        <Image
          source={require("../../../assets/icons/close.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

//User image in the top right corner
const UserImage = () => {
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      top: 0,
      right: 0,
      marginVertical: 40,
      marginHorizontal: 24,
    },
    iconContainer: {
      alignItems: "center",
    },
    icon: {
      width: 64,
      height: 64,
      marginBottom: 8,
    },
    title: {
      textTransform: "uppercase",
      color: "#174A5B",
      fontSize: 18,
      fontFamily: "ArialBold",
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          Alert.alert("Hey user!", "This is your user page, enjoy it")
        }
        style={styles.iconContainer}
      >
        <Image
          source={require("../../../assets/icons/avatar_dark_version.png")}
          style={styles.icon}
        />
        <Text style={styles.title}>ID: BR2234</Text>
      </TouchableOpacity>
    </View>
  );
};

//Signout button
const SignOutButton = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#174A5B",
      borderRadius: 12,
      marginTop: "auto",
      marginBottom: 60,
      width: "80%",
      alignSelf: "center",
      alignItems: "center",
      padding: 22,
    },
    text: {
      fontFamily: "ArialBold",
      fontSize: 22,
      letterSpacing: 2,
      color: "#fff",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.text}>SIGN OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

//Usermenu
export const UserMenu = ({ setShowUserMenu, navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        height: "100%",
        width: "70%",
        backgroundColor: "#FBF6ED",
        position: "absolute",
        right: 0,
        zIndex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <CloseImage setShowUserMenu={setShowUserMenu} navigation={navigation} />
        <UserImage />
      </View>
      <SignOutButton navigation={navigation} />
    </View>
  );
};

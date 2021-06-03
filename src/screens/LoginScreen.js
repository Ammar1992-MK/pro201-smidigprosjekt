import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

//Components
import { BrightTitle } from "../components/BrightTitle";
import { LoginButton } from "../components/LoginButton";
import db from "../firebase/firebaseDb";

export default function LoginScreen({ navigation }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("HomeScreen");
    }
  }, [isLoggedIn]);

  const handleLogIn = () => {
    //Logger inn jævlig usikkert, avhengig av nett per nå
    const ref = db.firestore().collection("users");
    ref
      .where("username", "==", userId)
      .where("password", "==", password)
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          setIsLoggedIn(true);
        }
      });
  };

  return (
    <View style={LoginScreenStyles.container}>
      <BrightTitle />
      <View style={LoginScreenStyles.inputContainer}>
        <Text style={LoginScreenStyles.title}>User ID</Text>
        <TextInput
          style={LoginScreenStyles.inputFields}
          onChangeText={setUserId}
          value={userId}
          placeholder="Enter UserID"
        />
        <Text style={LoginScreenStyles.title}>Password</Text>
        <TextInput
          style={LoginScreenStyles.inputFields}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter password"
        />
        <LoginButton onPress={handleLogIn} />
      </View>
    </View>
  );
}

const LoginScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: "#174A5B",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "left",
    color: "#C3DC93",
    fontSize: 25,
    fontFamily: "Arial",
    marginVertical: 10,
    alignSelf: "flex-start",
  },
  inputContainer: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -100,
  },
  inputFields: {
    justifyContent: "center",
    textAlign: "left",
    backgroundColor: "#fff",
    color: "#495057",
    width: 500,
    height: 50,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    fontSize: 20,
    fontFamily: "Arial",
  },
});

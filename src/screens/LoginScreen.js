import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from "react-native";

//Components
import { BrightTitle } from "../components/BrightTitle";
import { LoginButton } from "../components/LoginButton";
import db from "../firebase/firebaseDb";

export default function LoginScreen({ navigation }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const[secureText, setSecureText] = useState(true);
  const[eyeIcon, setEyeIcon] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("HomeScreen");
    }
  }, [isLoggedIn]);

  const handlePasswordVisibility = () => {
    if(secureText){
      setSecureText(false);
      setEyeIcon(require('../../assets/icons/eye_open.png'))
    }else {
      setSecureText(true);
      setEyeIcon(require('../../assets/icons/eye_closed.png'))
    }
  }

  {/*

  */}

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
       <View style={LoginScreenStyles.idContainer}>
         <Text style={LoginScreenStyles.title}>User ID</Text>
         <TextInput
             style={LoginScreenStyles.userIdInputField}
             onChangeText={setUserId}
             value={userId}
             placeholder="Enter UserID"
         />
       </View>
        <View style={LoginScreenStyles.passwordContainer}>
          <Text style={LoginScreenStyles.title}>Password</Text>
          <View style={LoginScreenStyles.passwordInputFieldContainer}>
            <TextInput
                style={LoginScreenStyles.passwordInputField}
                onChangeText={setPassword}
                value={password}
                placeholder="Enter password"
                secureTextEntry={secureText}
            />
            <TouchableOpacity style={LoginScreenStyles.eyeIconContainer} onPress={() => handlePasswordVisibility()}>
              <Image style={LoginScreenStyles.eyeIcon} source={eyeIcon}/>
            </TouchableOpacity>
          </View>
        </View>
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
    flexDirection : 'column',
    justifyContent: "center",
    alignItems: "center",
    marginTop: -100,
  },
  idContainer:{
    width : 500,
    display: 'flex',
    flexDirection : 'column',
  },
  passwordContainer:{
    width : 500,
    display: 'flex',
    flexDirection : 'column',
  },
  userIdInputField: {
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

  passwordInputFieldContainer:{
    display : 'flex',
    flexDirection : 'row',
    backgroundColor : '#fff',
    borderRadius : 5
  },
  passwordInputField : {
    justifyContent: "center",
    textAlign: "left",
    backgroundColor: "#fff",
    color: "#495057",
    width: 450,
    height: 50,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    fontSize: 20,
    fontFamily: "Arial",
  },
  eyeIcon:{
    width : '75%',
    height : '52%',
  },
  eyeIconContainer:{
    backgroundColor : '#fff',
    width : '10%',
    height : '100%',
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 5
  }

});

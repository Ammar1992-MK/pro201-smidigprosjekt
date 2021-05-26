import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import LongButton from "../components/LongButton";
const StartRepairScreen = ({lamp, customer, navigation}) => {

  return (
    <View style={StartRepairScreenStyles.container}>
      <NavigationBar navigation={navigation}/>
      <View style={StartRepairScreenStyles.lampContainer}>
        <View style={StartRepairScreenStyles.lampImageContainer}>
          <Image
            style={StartRepairScreenStyles.image}
            source={require("../../assets/product-images/sunbell-smart-1.png")}
          />
        </View>
        <View style={StartRepairScreenStyles.lampInfoContainer}>
          <View style={StartRepairScreenStyles.lampInfo}>
            <Text style={StartRepairScreenStyles.text}>REPAIR ID</Text>
            <Text style={StartRepairScreenStyles.data}>FR2324</Text>

            <Text style={StartRepairScreenStyles.text}>SNR</Text>
            <Text style={StartRepairScreenStyles.data}>333-567-812</Text>
          </View>

          <View style={StartRepairScreenStyles.userData}>
            <View>
              <Text style={StartRepairScreenStyles.text}>PHONE</Text>
              <Text style={StartRepairScreenStyles.data}>+123 455 677 899</Text>
            </View>
            <View>
              <Text style={StartRepairScreenStyles.text}>NAME</Text>
              <Text style={StartRepairScreenStyles.data}>Billy Jean</Text>
            </View>
          </View>
        </View>
      </View>
        <LongButton  title={"REPAIR"} icon={"repair"} textColor={"primary_teal"} backgroundColor={"primary_green"}/>
        <LongButton  title={"CAN NOT REPAIR"}  textColor={"white"} backgroundColor={"red"}/>
        <LongButton  title={"TROUBLESHOOT GUIDE"} icon={"learn"} textColor={"white"} backgroundColor={"primary_teal"}/>
    </View>
  );
};

export default StartRepairScreen;

const StartRepairScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F8E9",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  lampContainer: {
    margin: 30,
    width: "90%",
    height: "40%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  lampImageContainer: {
    width: "50%",
    height: "100%",
    backgroundColor: "#fff",
    borderColor: "#B7D381",
    borderWidth: 2,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  lampInfoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    marginLeft: 50,
  },
  lampInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "50%",
    width: "100%",
  },
  text: {
    color: "#174A5B",
    fontSize: 20,
  },

  data: {
    color: "#174A5B",
    fontSize: 30,
    fontWeight: "bold",
  },
  userData: {
    display: "flex",
    flexDirection: "column",
    height: "50%",
    width: "100%",
  },

  image: {
    width: "60%",
    height: "100%",
  },
  buttonsContainer : {
    display : 'flex',
    flexDirection : "column",
    alignItems : 'center',
    justifyContent : "space-around",
    width : '100%',
    height : '30%',
    backgroundColor : "blue"
  },
});

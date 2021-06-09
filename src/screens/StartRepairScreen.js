import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import {lamps} from '../utils/fakeDb'
//COMPONENTS
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import LongButton from "../components/LongButton";

const StartRepairScreen = ({ navigation, route}) => {
  const [userData, setUserData] = useState({});
  const [selectedLamp, setSelectedLamp] = useState();
  const {data} = route.params;

  const handleSelectedLamp = () => {
    lamps.map((el) => {
      const{name, image} = el;
      if(name === data.lamp){
        setSelectedLamp(image)
      }
    })
  }

  useEffect(() => {
    setUserData(data);
    handleSelectedLamp();
  }, [])

  return (

    <View style={styles.container}>
      <NavigationBar title="NEW REPAIR" navigation={navigation}  progressbar={true} step={1.5}/>
      <View style={styles.lampContainer}>
        <View style={styles.lampImageContainer}>
          <Image
            style={styles.image}
            source={selectedLamp}
          />
        </View>
        <View style={styles.lampInfoContainer}>
          <View style={styles.lampInfo}>
            <Text style={styles.text}>REPAIR ID</Text>
            <Text style={styles.data}>FR2324</Text>

            <Text style={styles.text}>SNR</Text>
            <Text style={styles.data}>{userData.serialNumber}</Text>
          </View>

          <View style={styles.userData}>
            <View>
              <Text style={styles.text}>PHONE</Text>
              <Text style={styles.data}>{userData.phoneNumber}</Text>
            </View>
            <View>
              <Text style={styles.text}>NAME</Text>
              <Text style={styles.data}>{userData.customerName}</Text>
            </View>
          </View>
        </View>
      </View>
        <LongButton  title={"REPAIR"} icon={"repair"} textColor={"primary_teal"} backgroundColor={"primary_green"} onPress={() => navigation.navigate("SelectPartsScreen",{
          selectedLamp : selectedLamp,
          lampName : userData.lamp,
          serialNumber : userData.serialNumber,
          userData
        })}/>
        <LongButton  title={"CAN NOT REPAIR"}  textColor={"white"} backgroundColor={"red"} onPress={ () => navigation.navigate("StartRepairSummaryScreen", {data: {...userData, selectedPartId: "DISCARD"}})}/>
        <LongButton  title={"TROUBLESHOOT GUIDE"} icon={"learn"} textColor={"white"} backgroundColor={"primary_teal"} onPress={() => navigation.navigate("TroubleshootScreen")}/>
    </View>
  );
};

export default StartRepairScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F8E9",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  lampContainer: {
    margin: 30,
    marginLeft: 100,
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

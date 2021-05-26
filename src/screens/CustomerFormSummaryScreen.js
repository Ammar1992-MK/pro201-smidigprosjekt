import React from "react";

import { View, Text, StyleSheet, TextInput } from "react-native";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import CardSmall from "../components/Cards/CardSmall";
import LongButton from "../components/LongButton";

const FilledInputField = ({ title, textInput }) => {
  const styles = StyleSheet.create({
    input: {
      backgroundColor: "#ffffff",
      fontSize: 30,
      borderWidth: 3,
      borderColor: "#00966C",
      borderRadius: 10,
      color: "#2C2A29",
      paddingLeft: 10,
    },
    inputHeaders: {
      color: "#174A5B",
      marginTop: "5%",
      fontSize: 34,
    },
  });
  return (
    <View>
      <Text style={styles.inputHeaders}>{title}</Text>
      <TextInput style={styles.input} value={textInput} />
    </View>
  );
};
//textInput er "objektet" med all informasjonen som brukeren fylte inn i formen på forrige skjerm
//Tenkte at vi kan gi disse verdiene til <FilledInputField />, også gjøre det umulige å redigere på de
//Vi må vel sjekke etter internett her
// Hvis bruker velger å trykke på start repair må de sendes videre til neste skjerm, hvis de trykker save må vi lagre informasjonen lokalt

const CustomerFormSummaryScreen = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    summaryContainer: {
      flexDirection: "row",
      marginBottom: 30,
    },
    inputFields: {
      flexDirection: "column",
      width: "50%",
    },
    buttonContainer: {
      height: "100%",
      alignItems: "center",
    },
  });

  return (
    <>
      <NavigationBar navigation={navigation} />
      <View styles={styles.container}>
        <View style={styles.summaryContainer}>
          <CardSmall lampName="SUNBELL SMART" />
          <View style={styles.inputFields}>
            <FilledInputField
              textInput={"123 456 789"}
              title={"Phone Number"}
            />
            <FilledInputField
              textInput={"1223-4442-12"}
              title={"Serial Number"}
            />
            <FilledInputField textInput={"Janky Johanski"} title={"Name"} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <LongButton
            icon="save"
            textColor="primary_teal"
            backgroundColor="primary_green"
            title="SAVE"
            onPress={() => navigation.navigate("HomeScreen")}
          />
          {/* We need to supply the information received into this component, so it will show on the next screen*/}
          <LongButton
            icon="whiteRepair"
            textColor="white"
            backgroundColor="primary_teal"
            title="START REPAIR"
            onPress={() => navigation.navigate("StartRepairScreen")}
          />
        </View>
      </View>
    </>
  );
};

export default CustomerFormSummaryScreen;

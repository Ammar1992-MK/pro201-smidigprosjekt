import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const FinishedRepairs = ({ dataLength }) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
    },
    folderContainer: {
      position: "relative",
    },
    numOfRepairs: {
      borderWidth: 2,
      borderRadius: 100,
      borderColor: "#fff",
      position: "absolute",
      bottom: 0,
      right: 0,
      fontSize: 30,
      padding: 5,
      margin: 5,
      color: "#fff",
      textAlign: "center",
    },
    text: {
      fontSize: 20,
      color: "#174A5B",
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/icons/folder.png")} />
        <Text style={styles.numOfRepairs}>{dataLength}</Text>
      </View>
      <Text style={styles.text}>Finished Repairs</Text>
    </View>
  );
};

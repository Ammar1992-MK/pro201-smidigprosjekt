import React, { useEffect } from "react";
import { View, Image, Dimensions, StyleSheet, ScrollView } from "react-native";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import PdfReader from "rn-pdf-reader-js";

const TroubleshootScreen = ({ navigation }) => {
  return (
    <>
      <NavigationBar title="TROUBLESHOOT" icon={true} navigation={navigation} />
      <PdfReader
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/smidig-prosjekt-38d3e.appspot.com/o/troubleshootguide.pdf?alt=media&token=ba0a1edc-24d0-4974-9f99-190702a0561d",
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default TroubleshootScreen;

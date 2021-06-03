import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const SelectedLampSummary = ({ lamp, sparePart, index, data }) => {
  return (
    <>
      <View style={SelectedLampSummaryStyles.container}>
        <View style={SelectedLampSummaryStyles.indexContainer}>
          <Text style={SelectedLampSummaryStyles.indexText}>{index}</Text>
        </View>
        <View style={SelectedLampSummaryStyles.lampImageContainer}>
          {lamp && (
            <Image
              style={SelectedLampSummaryStyles.selectedLampImage}
              source={lamp}
            />
          )}
          {sparePart && (
            <Image
              style={SelectedLampSummaryStyles.selectedPartImage}
              source={sparePart}
            />
          )}
          {sparePart && (
            <Image
              style={SelectedLampSummaryStyles.greenWrench}
              source={require("../../assets/icons/wrench_grren_bg.png")}
            />
          )}
        </View>
        <View style={SelectedLampSummaryStyles.selectedLampInfoContainer}>
          <View>
            <Text style={SelectedLampSummaryStyles.selectedLampName}>
              {data.lampName}
            </Text>
          </View>
          <View>
            <Text style={SelectedLampSummaryStyles.selectedLampRepairId}>
              REPAIR ID
            </Text>
            <Text style={SelectedLampSummaryStyles.selectedLampRepairIdText}>
              FR2324
            </Text>
          </View>
          <View>
            <Text style={SelectedLampSummaryStyles.selectedLampSerialNo}>
              SNR
            </Text>
            <Text style={SelectedLampSummaryStyles.selectedLampSerialNoText}>
              {data.serialNumber}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
export default SelectedLampSummary;

const SelectedLampSummaryStyles = StyleSheet.create({
  container: {
    width: "90%",
    height: 160,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40,
    marginTop: 20,
    borderColor: "rgba(195, 220, 147, 0.35)",
    borderWidth: 4,
    borderRadius: 18,
    backgroundColor: "#F3F8E9",
  },

  indexContainer: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    backgroundColor: "#C3DC93",
    borderRadius: 40 / 2,
    marginLeft: 30,
  },

  indexText: {
    color: "#174A5B",
    fontSize: 28,
    fontFamily: "Arial",
    fontWeight: "700",
  },

  lampImageContainer: {
    width: "20%",
    height: "84%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    borderColor: "rgba(195, 220, 147, 0.15)",
    borderWidth: 3,
    borderStyle: "solid",
    marginLeft: 50,
  },

  selectedLampImage: {
    width: "75%",
    height: "75%",
  },

  selectedLampInfoContainer: {
    width: "47%",
    height: "84%",
    marginLeft: 50,
  },

  selectedLampName: {
    color: "#174A5B",
    fontSize: 20,
    fontFamily: "ArialBold",
    lineHeight: 24,
    marginVertical: 4,
    letterSpacing: 0.5,
  },
  selectedLampRepairId: {
    color: "#174A5B",
    fontSize: 16,
    fontFamily: "Arial",
  },
  selectedLampRepairIdText: {
    color: "#174A5B",
    fontSize: 24,
    fontFamily: "ArialBold",
    lineHeight: 24,
    marginBottom: 4,
  },
  selectedLampSerialNo: {
    color: "#174A5B",
    fontSize: 16,
    fontFamily: "Arial",
  },
  selectedLampSerialNoText: {
    color: "#174A5B",
    fontSize: 24,
    fontFamily: "ArialBold",
    lineHeight: 24,
    marginBottom: 4,
  },
  greenWrench: {
    width: "15%",
    height: "20%",
    marginTop: 80,
    marginRight: 20,
  },
  selectedPartImage: {
    width: "70%",
    height: "70%",
    zIndex: 4,
  },
});

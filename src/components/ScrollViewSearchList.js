import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ListItemComponent from "./ListItemComponent";

const ScrollViewSearchList = ({ data, icon }) => {
  return (
    <View style={Styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItemComponent data={item} icon={icon} />}
      />
    </View>
  );
};
export default ScrollViewSearchList;

const Styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 400,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
});

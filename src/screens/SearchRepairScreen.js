import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import ScrollViewSearchList from "../components/ScrollViewSearchList";
import { getData } from "../utils/helpers";

const SearchRepairScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedToggle, setSelectedToggle] = useState("ready");

  console.log("Data", data);
  const readyData = data.filter((el) => {
    //Filterer ut alle som ikke stemmer med søket eller har status som tilsvarer toggle (nå Ready eller finished).
    let search_status_input;
    switch (selectedToggle) {
      case "ready":
        search_status_input = "NEW";
        break;
      case "finished":
        search_status_input = "DONE";
        break;
    }
    if (el.status === search_status_input) {
      const { serialNumber, lamp } = el;
      if (
        serialNumber.toString().includes(searchTerm) ||
        lamp.toString().includes(searchTerm) ||
        searchTerm === ""
      ) {
        return el;
      }
    }
  });

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <>
      <NavigationBar navigation={navigation} />
      <View style={Styles.container}>
        <View style={Styles.searchContainer}>
          <View style={Styles.searchTitleContainer}>
            <Text style={Styles.searchTitle}>Search repair</Text>
          </View>
          <View style={Styles.searchInputContainer}>
            <TextInput
              style={Styles.input}
              onChangeText={(searchTerm) => setSearchTerm(searchTerm)}
            />
            <Image
              style={Styles.searchIcon}
              source={require("../../assets/icons/search.png")}
            />
          </View>
        </View>
        {/*
                    Tenker det er bedre at det bare automatisk refresher når man skriver inn noe nytt?
                    <View style={Styles.buttonsContainer}>
                        <TouchableOpacity style={[Styles.searchButton, {backgroundColor: 'lightgrey'}]} disabled={true}>
                            <Text style={Styles.searchText}>SEARCH</Text>
                        </TouchableOpacity>
                    </View>
                     */}

        <View style={Styles.fetchButtonsContainer}>
          <TouchableOpacity
            style={[
              Styles.readyButton,
              selectedToggle === "ready"
                ? { backgroundColor: "#174A5B" }
                : { backgroundColor: "#fff" },
            ]}
            onPress={() => setSelectedToggle("ready")}
          >
            <Text
              style={[
                Styles.readyText,
                selectedToggle === "ready"
                  ? { color: "#fff" }
                  : { color: "#174A5B" },
              ]}
            >
              READY
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.finishedButton,
              selectedToggle === "finished"
                ? { backgroundColor: "#174A5B" }
                : { backgroundColor: "#fff" },
            ]}
            onPress={() => setSelectedToggle("finished")}
          >
            <Text
              style={[
                Styles.finishedText,
                selectedToggle === "finished"
                  ? { color: "#fff" }
                  : { color: "#174A5B" },
              ]}
            >
              FINISHED
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollViewSearchList data={readyData} icon={"search"} />
      </View>
    </>
  );
};

export default SearchRepairScreen;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F8E9",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  searchContainer: {
    width: "80%",
    height: "18%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  searchTitleContainer: {
    width: "30%",
    height: 1,
    marginRight: "50%",
  },
  searchTitle: {
    fontSize: 20,
    color: "#174A5B",
    marginLeft: 15,
  },
  searchInputContainer: {
    width: "80%",
    height: "40%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#174A5B",
    borderStyle: "solid",
    borderRadius: 25,
  },
  searchIcon: {
    width: "13%",
    height: "100%",
    marginRight: 10,
  },
  input: {
    width: "70%",
    height: "100%",
    fontSize: 43,
  },
  searchButton: {
    width: "80%",
    height: "40%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#9FD18B",
    borderRadius: 10,
  },
  buttonsContainer: {
    width: "80%",
    height: "18%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  searchText: {
    color: "#174A5B",
    fontFamily: "ArialBold",
    fontSize: 25,
  },
  fetchButtonsContainer: {
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottomWidth: 3,
    borderBottomColor: "#174A5B",
  },
  readyButton: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  finishedButton: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  readyText: {
    fontFamily: "ArialBold",
    color: "#174A5B",
    fontSize: 30,
  },

  finishedText: {
    fontFamily: "ArialBold",
    color: "#174A5B",
    fontSize: 30,
  },
});

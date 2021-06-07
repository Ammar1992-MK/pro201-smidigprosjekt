import React,{useState, useEffect} from 'react';

import {Text,View, StyleSheet,ScrollView,Image,TouchableOpacity, FlatList} from "react-native";

//COMPONENTS
import SelectedLampSummary from "../components/SelectedLampSummary";
import {NavigationBar} from '../components/NavigationBar/NavigationBar'
import LongButton from "../components/LongButton";
import {NextButton} from "../components/NextButton";
import {spareParts} from "../utils/fakeDb";

const SelectPartsScreen = ({navigation, route}) => {
    //CHOSEN PART
    const [chosenPart, setChosenPart] = useState(false);

    //CHANGE STEP IN NAVIGATIONBAR
    let navbarStep = 2;
    if (chosenPart) {
        navbarStep = 2.5;
    } else {
        navbarStep = 2;
    }

    const {lampName, serialNumber, selectedLamp, userData} = route.params;
    const [userDataFormat, setUserData] = useState({});
    const[selectedPartId, setSelectedPartId] = useState([]);

  const toggle_selected = (el_id) => {
    if (selectedPartId.includes(el_id)) {
      setChosenPart(false);
      let prev_selected = selectedPartId.slice();
      prev_selected.splice(prev_selected.indexOf(el_id), 1);
      setSelectedPartId(prev_selected);
    } else {
      setChosenPart(true);
      setSelectedPartId([...selectedPartId, el_id]);
    }
  }

  const spare_parts_div = (item) => {
    const { id, image } = item;
    const is_selected = selectedPartId.includes(id) ? <View style={styles.checkMark}><Image style={styles.checkMarkIcon} source={require('../../assets/icons/done_teal.png')}/></View> : <Text></Text>;
    return (
      <TouchableOpacity
        key={id}
        style={styles.partImageContainer}
        onPress={() => toggle_selected(id)}
      >
          {is_selected}
        <View style={styles.partImageView}>
          <Image style={styles.partImage} source={image} />
        </View>
      </TouchableOpacity>
    );
  };

    return (
    <View style={styles.container}>
      <NavigationBar title="NEW REPAIR" navigation={navigation} progressbar={true} step={navbarStep}/>
      <SelectedLampSummary
        index={"1"}
        lamp={selectedLamp}
        data={userDataFormat}
      />
      {/*Missing onPress to navigate to LEARN*/}
      <LongButton
        title={"CHANGE PART GUIDE"}
        backgroundColor={"primary_teal"}
        icon={"learn"}
        textColor={"white"}
        onPress={() => navigation.navigate('TroubleshootScreen')}
      />
      <View style={styles.scrollHeader}>
        <View style={styles.stepIndex}>
          <Text style={styles.stepIndexTitle}>2</Text>
        </View>
        <Text style={styles.scrollHeaderTitle}>SELECT PART</Text>
        <Image
          style={styles.repairIcon}
          source={require("../../assets/icons/wrench_grren_bg.png")}
        />
      </View>
      <FlatList
        style={styles.scrollContainer}
        numColumns={2}
        data={spareParts}
        horizontal={false}
        renderItem={({ item }) => spare_parts_div(item)}
      ></FlatList>
      <NextButton
        onPress={() =>
          navigation.navigate("StartRepairSummaryScreen", {
            data: { ...userData, selectedPartId },
          })
        }
      />
    </View>
  );
}

export default SelectPartsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F8E9",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  scrollContainer: {
    width: "80%",
    height: "100%",
    marginTop: 20,
    marginRight: 10,
  },

  partImage: {
    width: "100%",
  },
  scrollHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    justifyContent: "space-evenly",
  },
  stepIndex: {
    width: 50,
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C3DC93",
    borderWidth: 5,
    borderRadius: 50,
  },
  scrollHeaderTitle: {
    color: "#174A5B",
    fontWeight: "bold",
    fontSize: 30,
  },
  stepIndexTitle: {
    color: "#174A5B",
    fontWeight: "bold",
    fontSize: 30,
  },
  partImageContainer: {
    width: "45%",
    height : '100%',
    marginHorizontal: 17,
    alignSelf: "center",
  },

  partImageView: {
    width: "100%",
    marginBottom : 20,
  },
  checkMark: {
    width :'100%',
    height : '90%',
    opacity : 0.7,
    zIndex : 2,
    position : 'absolute',
    display:'flex',
    flexDirection : 'row',
    alignItems :'center',
    justifyContent :'center',
    backgroundColor: '#99a2b1',
    borderRadius: 10,
  },
  checkMarkIcon:  {
    width : '70%',
    height : '70%',
  }
});
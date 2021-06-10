import React,{useState, useEffect} from 'react';

import {Text,View, StyleSheet,ScrollView,Image,TouchableOpacity, FlatList} from "react-native";

//COMPONENTS
import SelectedLampSummary from "../components/SelectedLampSummary";
import {NavigationBar} from '../components/NavigationBar/NavigationBar'
import LongButton from "../components/LongButton";
import {NextButton} from "../components/NextButton";
import {BackButton} from "../components/BackButton";
import {spareParts} from "../utils/fakeDb";

const SelectPartsScreen = ({navigation, route}) => {

    //CHANGE STEP IN NAVIGATIONBAR
    let navbarStep = 2;
    if (chosenPart) {
        navbarStep = 2.5;
    } else {
        navbarStep = 2;
    }

    //CHOSEN PART
    const [chosenPart, setChosenPart] = useState(false);

    //CHOSEN PARTS ID
    const[selectedPartId, setSelectedPartId] = useState([]);

    //CHOSEN LAMP AND USER DATA
    const {lampName, serialNumber, selectedLamp, userData} = route.params;

    //CHECKS SELECTED PART ID
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

  //RENDERS PARTS AND CHECKS IF SELECTED
  const spare_parts_div = (item) => {
    const { id, image, name } = item;
    const is_selected = selectedPartId.includes(id) ? 
    <View style={styles.checkMark}>
      <Image style={styles.checkMarkIcon} source={require('../../assets/icons/success_icon.png')}/>
    </View> 
    : null

    return (
      <TouchableOpacity
        key={id}
        style={styles.partImageContainer}
        onPress={() => toggle_selected(id)}
      >
        {is_selected}
        <Image style={styles.partImage} source={image} />
        <Text style={styles.partText}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (

    <View style={styles.container}>
      <NavigationBar navigation={navigation} progressbar={true} step={navbarStep}/>
      <SelectedLampSummary
        lamp={selectedLamp}
        data={userData}
      />
      <LongButton
        title={"CHANGE PART GUIDE"}
        backgroundColor={"primary_teal"}
        icon={"learn"}
        textColor={"white"}
        onPress={() => navigation.navigate('TroubleshootScreen')}
      />
      <View style={styles.selectPartsContainer}>
        <View style={styles.selectsPartsContainerHeader}>
          <View style={styles.indexContainer}>
            <Text style={styles.indexText}>2</Text>
          </View>
          <Text style={styles.selectsPartsContainerTitle}>SELECT PART</Text>
          <Image
            style={styles.repairIcon}
            source={require("../../assets/icons/wrench_primary.png")}
          />
        </View>
        <FlatList
          style={styles.partsContainer}
          numColumns={3}
          data={spareParts}
          horizontal={false}
          renderItem={({ item }) => spare_parts_div(item)}
        ></FlatList>
      </View>
      
      <View style={styles.navigateButtons}>
        <BackButton onPress={() => navigation.navigate('StartRepairScreen')} />
        <NextButton
          onPress={() =>
            navigation.navigate("StartRepairSummaryScreen", {
              data: { ...userData, selectedPartId,selectedLamp },
            })
          }
        />
			</View>
    </View>
  );
}

export default SelectPartsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B7D38135",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  selectPartsContainer: {
    flexDirection: 'column',
		alignItems: 'center',
		width: '82%',
		height: 390,
		marginTop: 20,
		borderRadius: 18,
		backgroundColor: '#ffffff',
		borderColor: 'transparent',
		borderWidth: 4,
  },
  selectsPartsContainerHeader: {
    flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		marginTop: 20,
  },
  selectsPartsContainerTitle: {
    fontSize: 24,
		fontFamily: 'ArialBold',
		color: '#174A5B',
		marginLeft: 22,
  },
  indexContainer: {
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		lineHeight: 1,
		borderRadius: 50 / 2,
		marginLeft: 26,
		backgroundColor: '#ffffff',
		borderColor: '#C3DC93',
		borderWidth: 4,
	},
  indexText: {
		color: '#174A5B',
		fontSize: 28,
		fontFamily: 'Arial',
		fontWeight: '700',
	},
  repairIcon: {
    marginLeft: 8,
    transform: [{ scale: 0.75 }],
  },
  partsContainer: {
    width: "95%",
    marginBottom: 30,
    marginTop: 8
  },
  partImageContainer: {
    height: 175,
    flex: 1/3,
    margin: 4,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(23, 74, 91, 0.02)',
    borderRadius: 12,
    elevation: 5,
    backgroundColor: '#fff',
  },
  partImage: {
    width: '100%',
    transform: [{ scale: 0.65 }],
    overflow: 'hidden'
  },
  partText: {
    fontFamily: 'ArialBold',
    fontSize: 20,
		color: '#174A5B',
    zIndex: 2,
    bottom: 0,
    position: 'absolute',
    textTransform: 'uppercase'
  },
  checkMark: {
    width :'100%',
    height : '100%',
    zIndex : 3,
    position : 'absolute',
    alignItems :'center',
    justifyContent :'center',
    backgroundColor: 'rgba(42, 42, 42, 0.5)',
    borderRadius: 12,
  },
  checkMarkIcon:  {
    width : '60%',
    height : '60%',
  },
  navigateButtons: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		marginLeft: 40,
		marginRight: 40,
    paddingHorizontal: '5%',
    paddingTop: 0,
    paddingBottom: 20,
		position: 'absolute',
		bottom: 0,
    backgroundColor: 'rgba(243, 248, 233, 0.9)'
	},
});
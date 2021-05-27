import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import LongButton from "../components/LongButton";
const StartRepairScreen = ({ lamp, customer, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={StartRepairScreenStyles.container}>
      <NavigationBar />
      <Modal animation={"fade"} transparent={true} visible={modalVisible}>
        <View style={StartRepairScreenStyles.centeredModal}>
          <View style={StartRepairScreenStyles.modalHeader}>
            <View style={StartRepairScreenStyles.modalTitleContainer}>
              <Text style={StartRepairScreenStyles.modalTitle}>
                Can not repair?
              </Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <View>
                <Image
                  style={StartRepairScreenStyles.modalCloseIcon}
                  source={require("../../assets/icons/close.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={StartRepairScreenStyles.modalBrokenLampContainer}>
            <Image
              style={StartRepairScreenStyles.brokenLamp}
              source={require("../../assets/product-images/broken_sunbell.png")}
            />
            <Image
              style={StartRepairScreenStyles.redWrench}
              source={require("../../assets/icons/wrench_red_bg.png")}
            />
          </View>
          <View style={StartRepairScreenStyles.modalButtonsContainer}>
            <TouchableOpacity
              style={StartRepairScreenStyles.modalBackButton}
              onPress={() => setModalVisible(false)}
            >
              <View>
                <Text style={StartRepairScreenStyles.modalBackText}>BACK</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={StartRepairScreenStyles.modalTrashButton}>
              <View style={StartRepairScreenStyles.trashButtonContainer}>
                <View style={StartRepairScreenStyles.trashIconContainer}>
                  <Image style={StartRepairScreenStyles.trashIcon} source={require('../../assets/icons/trash_red_bg.png')}/>
                </View>
                <Text style={StartRepairScreenStyles.modalTrashText}>
                  YES - TRASH
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={StartRepairScreenStyles.lampContainer}>
        {/* Image */}
        <View style={StartRepairScreenStyles.lampImageContainer}>
          <Image
            style={StartRepairScreenStyles.image}
            source={require("../../assets/product-images/sunbell-smart-1.png")}
          />
        </View>
        {/* Lamp and user info */}
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
      {/* Buttons */}
      <LongButton
        title={"REPAIR"}
        icon={"repair"}
        textColor={"primary_teal"}
        backgroundColor={"primary_green"}
        onPress={()=> navigation.navigate('SelectPartsScreen')}
      />
      <LongButton
        title={"CAN NOT REPAIR"}
        textColor={"white"}
        backgroundColor={"red"}
        onPress={() => setModalVisible(true)}
      />
      <LongButton
        title={"TROUBLESHOOT GUIDE"}
        icon={"learn"}
        textColor={"white"}
        backgroundColor={"primary_teal"}
      />
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
  centeredModal: {
    width: "80%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 255,
    marginLeft: 77,
    borderColor: "#7a7a7a",
    borderWidth: 2,
    borderRadius: 10,
  },
  modal: {
    width: "80%",
    height: "50%",
    backgroundColor: "#fff",
  },
  modalHeader: {
    width: "100%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalCloseIcon: {
    width: 45,
    height: 45,
  },
  modalTitleContainer: {
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 120,
  },

  modalTitle: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },

  modalBrokenLampContainer: {
    width: "50%",
    height: "65%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#174A5B",
    borderWidth: 1,
    borderRadius: 10,
  },

  brokenLamp: {
    width: "60%",
    height: "90%",
  },

  redWrench: {
    width: "15%",
    height: "15%",
    marginTop: 200,
  },

  modalBackButton: {
    width: "30%",
    height: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#174A5B",
    borderWidth: 3,
    borderRadius: 10,
  },

  modalBackText: {
    color: "#174A5B",
    fontWeight: "bold",
    fontSize: 30,
  },
  modalTrashButton: {
    width: "50%",
    height: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CB333B",
    borderRadius: 10,
  },

  trashButtonContainer : {
    width :'100%',
    height : '100%',
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-evenly',
  },

  modalTrashText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },

  trashIcon : {
    width : '80%',
    height : '80%',
  },
  trashIconContainer : {
    width :'10%',
    height : '100%',
    display : 'flex',
    flexDirection :'row',
    alignItems :'center',
  },
  modalButtonsContainer: {
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 15,
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
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "30%",
    backgroundColor: "blue",
  },
});

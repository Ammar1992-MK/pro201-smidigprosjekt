import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//Components
import { NavigationHomeButton } from "./NavigationHomeButton";
import { NavigationProgressbar } from "./NavigationProgressbar";

export const NavigationBar = ({ navigation, title, icon, step, progressbar}) => {

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <NavigationHomeButton
          style={styles.button}
          navigation={navigation}
        />
      </View>

      <View style={styles.titleContainer}>
      {progressbar ? (
        <NavigationProgressbar step={step}/>
      ):(
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
            {icon ? <Image source={require('../../../assets/icons/repair_guide_white.png')} style={styles.titleIcon} /> : null }
        </View>
      )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 134,
        backgroundColor: '#174A5B',
        alignItems: 'center',
        zIndex: 99,
        paddingLeft: '5%'
    },
    title: {
        fontSize: 32,
        fontFamily: 'ArialBold',
        letterSpacing: 2,
        color: '#fff',
        textTransform: "uppercase",
    },
    homeIconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    titleContainer: {
        flex: 7,
        alignItems: 'center',
        paddingRight: '10%',
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    titleIcon: {
        transform: [{ scale: 0.75 }],
    }
})

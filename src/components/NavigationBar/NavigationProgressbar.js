import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
let styles;

export const NavigationProgressbar = ({ navigation, step }) => {

  switch (step) {
    case 1:
      styles = step1Styles;
      break;

    case 1.5:
      styles = step1HalfStyles;
      break;

    case 2:
      styles = step2Styles
      break;

    case 2.5:
      styles = step2HalfStyles
      break;

    case 3:
      styles = step3Styles
      break;

    case 3.5:
      styles = step3FullStyles
      break;
  }
  return (
    <View style={commonStyles.progressbarContainer}>
      <View style={commonStyles.stepContainer}>
        <View style={styles.index1}>
          <Text style={commonStyles.indexText}>1</Text>
        </View>
        <Text style={styles.step1Text}>Register lamp</Text>
      </View>
      <View style={styles.stepBar1}></View>
      <View style={styles.stepBar1Half}></View>
      <View style={commonStyles.stepContainer}>
        <View style={styles.index2}>
          <Text style={commonStyles.indexText}>2</Text>
        </View>
        <Text style={styles.step2Text}>Select repaired parts</Text>
      </View>
      <View style={styles.stepBar2}></View>
      <View style={styles.stepBar2Half}></View>
      <View style={commonStyles.stepContainer}>
        <View style={styles.index3}>
          <Text style={commonStyles.indexText}>3</Text>
        </View>
        <Text style={styles.step3Text}>save repair</Text>
      </View>
    </View>
  )
}

  const commonStyles = StyleSheet.create({
    progressbarContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 64,
      marginTop: 4
    },
    stepContainer: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    indexText: {
        color: '#174A5B',
        fontSize: 28,
        fontFamily: 'Arial',
        fontWeight: '700',
    }
})

  const step1Styles = StyleSheet.create({
    index1:{
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 60 / 2,
      backgroundColor: '#ffffff',
      borderColor: '#C3DC93',
      borderWidth: 6,
      marginTop: 3
    },
    index2:{
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        backgroundColor: '#fff',
        borderRadius: 52 / 2,
    },
    index3:{
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        backgroundColor: '#fff',
        borderRadius: 52 / 2,
    },
    step1Text: {
        color: '#C3DC93',
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40
    },
    step2Text: {
        color: '#fff',
        opacity: 0.8,
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    step3Text: {
        color: '#fff',
        opacity: 0.8,
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    stepBar1: {
      height: 8,
      width: 80,
      backgroundColor: '#fff',
      marginBottom: 42,
      marginLeft: -46,
      zIndex: -1
    },
    stepBar1Half: {
      height: 8,
      width: 80,
      backgroundColor: '#fff',
      marginBottom: 42,
      marginRight: -75
    },
    stepBar2: {
      height: 8,
      width: 80,
      backgroundColor: '#fff',
      marginBottom: 42,
      marginLeft: -75
    },
    stepBar2Half: {
      height: 8,
      width: 80,
      backgroundColor: '#fff',
      marginBottom: 42,
      marginRight: -46,
      zIndex: -1
    }
})

  const step1HalfStyles = StyleSheet.create({
     index1:{
      width: 52,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 52 / 2,
      backgroundColor: '#C3DC93',
    },
    index2:{
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        backgroundColor: '#fff',
        borderRadius: 52 / 2,
    },
    index3:{
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        backgroundColor: '#fff',
        borderRadius: 52 / 2,
    },
    step1Text: {
        color: '#C3DC93',
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    step2Text: {
        color: '#fff',
        opacity: 0.8,
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    step3Text: {
        color: '#fff',
        opacity: 0.8,
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    stepBar1: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginLeft: -46,
      zIndex: -1
    },
    stepBar1Half: {
      height: 8,
      width: 80,
      backgroundColor: '#fff',
      marginBottom: 42,
      marginRight: -75,
      zIndex: -1
    },
    stepBar2: {
      height: 8,
      width: 80,
      backgroundColor: '#fff',
      marginBottom: 42,
      marginLeft: -75,
      zIndex: -1
    },
    stepBar2Half: {
      height: 8,
      width: 80,
      backgroundColor: '#fff',
      marginBottom: 42,
      marginRight: -46,
      zIndex: -1
    }
})

  const step2Styles = StyleSheet.create({
    index1:{
      width: 52,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 52 / 2,
      backgroundColor: '#C3DC93',
      marginBottom: 3
    },
    index2:{
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 60 / 2,
      backgroundColor: '#ffffff',
      borderColor: '#C3DC93',
      borderWidth: 6,
    },
    index3:{
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        backgroundColor: '#fff',
        borderRadius: 52 / 2,
    },
    step1Text: {
        color: '#C3DC93',
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    step2Text: {
        color: '#fff',
        opacity: 0.8,
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40
    },
    step3Text: {
        color: '#fff',
        opacity: 0.8,
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    stepBar1: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginLeft: -46,
      zIndex: -1
    },
    stepBar1Half: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginRight: -75,
      zIndex: -1
    },
    stepBar2: {
      height: 8,
      width: 80,
      backgroundColor: '#fff',
      marginBottom: 42,
      marginLeft: -75,
      zIndex: -1
    },
    stepBar2Half: {
      height: 8,
      width: 80,
      backgroundColor: '#fff',
      marginBottom: 42,
      marginRight: -46,
      zIndex: -1
    }
})

  const step2HalfStyles = StyleSheet.create({
    index1:{
      width: 52,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 52 / 2,
      backgroundColor: '#C3DC93',
      marginBottom: 3
    },
    index2:{
      width: 52,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 52 / 2,
      backgroundColor: '#C3DC93',
      marginBottom: 3
    },
    index3:{
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        backgroundColor: '#fff',
        borderRadius: 52 / 2,
    },
    step1Text: {
        color: '#C3DC93',
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    step2Text: {
        color: '#fff',
        opacity: 0.8,
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    step3Text: {
        color: '#fff',
        opacity: 0.8,
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    stepBar1: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginLeft: -46,
      zIndex: -1
    },
    stepBar1Half: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginRight: -75,
      zIndex: -1
    },
    stepBar2: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginLeft: -75,
      zIndex: -1
    },
    stepBar2Half: {
      height: 8,
      width: 80,
      backgroundColor: '#fff',
      marginBottom: 42,
      marginRight: -46,
      zIndex: -1
    }
})

  const step3Styles = StyleSheet.create({
  index1:{
      width: 52,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 52 / 2,
      backgroundColor: '#C3DC93',
      marginBottom: 3
    },
    index2:{
      width: 52,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 52 / 2,
      backgroundColor: '#C3DC93',
      marginBottom: 3
    },
    index3:{
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 60 / 2,
      backgroundColor: '#ffffff',
      borderColor: '#C3DC93',
      borderWidth: 6,
    },
    step1Text: {
        color: '#C3DC93',
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    step2Text: {
        color: '#fff',
        opacity: 0.8,
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    step3Text: {
        color: '#fff',
        opacity: 0.8,
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    stepBar1: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginLeft: -46,
      zIndex: -1
    },
    stepBar1Half: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginRight: -75,
      zIndex: -1
    },
    stepBar2: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginLeft: -75,
      zIndex: -1
    },
    stepBar2Half: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginRight: -46,
      zIndex: -1
    }
})

  const step3FullStyles = StyleSheet.create({
   index1:{
      width: 52,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 52 / 2,
      backgroundColor: '#C3DC93',
      marginBottom: 3
    },
    index2:{
      width: 52,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 52 / 2,
      backgroundColor: '#C3DC93',
      marginBottom: 3
    },
    index3:{
      width: 52,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 52 / 2,
      backgroundColor: '#C3DC93',
      marginBottom: 3
    },
    step1Text: {
        color: '#C3DC93',
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    step2Text: {
        color: '#fff',
        opacity: 0.8,
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    step3Text: {
        color: '#fff',
        opacity: 0.8,
        fontSize: 17,
        fontFamily: 'ArialBold',
        textTransform: 'uppercase',
        marginTop: 4,
        maxWidth: 200,
        textAlign: 'center',
        height: 40,
        paddingTop: 3
    },
    stepBar1: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginLeft: -46,
      zIndex: -1
    },
    stepBar1Half: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginRight: -75,
      zIndex: -1
    },
    stepBar2: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginLeft: -75,
      zIndex: -1
    },
    stepBar2Half: {
      height: 8,
      width: 80,
      backgroundColor: '#C3DC93',
      marginBottom: 42,
      marginRight: -46,
      zIndex: -1
    }
})

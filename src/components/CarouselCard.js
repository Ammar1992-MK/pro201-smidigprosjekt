import React from "react";
import { View, StyleSheet, Image } from "react-native";

const CarouselCard = ({img, selected}) => {
  return (
    <View style={styles.container}>
      {selected ? (
        <View styles={styles.imageContainer}>
          <Image style={styles.image} source={img} />
          <View style={styles.checkMarkIconContainer}>
            <Image style={styles.checkMarkIcon}
              source={require('../../assets/icons/success_icon.png')} />
          </View>
        </View>
      ) : (
        <View>
          <Image style={styles.image} source={img} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    height: 160,
    width: 160,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 9,
    position: 'relative'
  },
  image: {
    transform: [{ scale: 0.6 }],
  },
  imageContainer: {
    width: 160,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkMarkIconContainer : {
    width: 160,
    height: 160,
    position: 'absolute',
    top: '16%',
    right: '30%',
    backgroundColor: 'rgba(42, 42, 42, 0.5)',
    borderRadius: 12,
  },
  checkMarkIcon: {
    position: 'absolute',
    top: '20%',
    right: '25%',
  }
});

export default CarouselCard;

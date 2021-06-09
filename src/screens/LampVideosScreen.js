import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView, Text, Image} from "react-native";

import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import {lampsIcon} from "../utils/fakeDb";
import {BackButton} from "../components/BackButton";

const LampVideosScreen = ({navigation, route}) => {
    const [clickedLamp, setClickedLamp] = useState({});
    let lamp = route.params;

    useEffect(() => {
        setClickedLamp(lamp)
    })

    const lamps_div = lampsIcon.map((el, i) => {
        const {name, image} = el;
        if (name === clickedLamp.lamp) {
            lampImage = image;
        }
    });
    let lampImage;

    return (
        <>
        <NavigationBar icon={true} title="CHANGE PART" navigation={navigation}/>
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.lampContainer}>
                    <View style={styles.lampTextContainer}>
                        <Text style={styles.header}>HOW TO REPAIR</Text>
                        <Text style={styles.lampName}>{clickedLamp.lamp}</Text>
                    </View>
                    <View style={styles.lampImage}>
                        <Image style={styles.lampIcon} source={lampImage} />
                    </View>
                </View>
                    <TouchableOpacity
                        style={styles.videoContainer}
                        onPress={() => navigation.navigate('LearnVideoPlayerScreen', {name: "Circuit Card", id: 2})}
                    >
                        <Text style={styles.text}>CIRCUIT CARD</Text>
                        <View style={styles.cardRow}>
                        <Image
                            style={styles.partImage}
                            source={require("../../assets/product-images/circuit_card.png")}
                        />
                            <Image
                                style={styles.videoImage}
                                source={require("../../assets/video-images/circuit_card-movie.png")}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.videoContainer}
                        onPress={() => navigation.navigate('LearnVideoPlayerScreen', {name: "Battery", id: 1 })}>
                        <Text style={styles.text}>BATTERY</Text>
                        <View style={styles.cardRow}>
                            <Image
                                style={styles.partImage}
                                source={require("../../assets/product-images/battery.png")}
                            />
                            <Image
                                style={styles.videoImage}
                                source={require("../../assets/video-images/circuit_card-movie.png")}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.videoContainer}
                        onPress={() => navigation.navigate('LearnVideoPlayerScreen', {name: "Light", id: 4 })}>
                        <Text style={styles.text}>LIGHT BULB</Text>
                        <View style={styles.cardRow}>
                            <Image
                                style={styles.partImage}
                                source={require("../../assets/product-images/light_bulb.png")}
                            />
                            <Image
                                style={styles.videoImage}
                                source={require("../../assets/video-images/circuit_card-movie.png")}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.videoContainer, styles.lastContainer]}
                        onPress={() => navigation.navigate('LearnVideoPlayerScreen', {name: "Motor", id: 3})}>
                        <Text style={styles.text}>COGS</Text>
                        <View style={styles.cardRow}>
                            <Image
                                style={styles.partImage}
                                source={require("../../assets/product-images/cogs.png")}
                            />
                            <Image
                                style={styles.videoImage}
                                source={require("../../assets/video-images/circuit_card-movie.png")}
                            />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            <View style={styles.navigateButtons}>
                <BackButton onPress={() => navigation.navigate('LearnSelectLampScreen')} buttonStyle="outlined"/>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F8E9',
        flex: 1,
        fontFamily: 'ArialBold',
    },
    lampContainer: {
        flexDirection: "row",
        borderWidth: 4,
        borderColor: 'rgba(195, 220, 147, 0.35)',
        margin: 38,
        padding: 12,
        borderRadius: 18,
        justifyContent: "space-between",
        alignItems: 'center'
    },
    lampTextContainer: {
        marginLeft: 30,
        fontFamily: 'Arial'
    },
    header: {
        color: "#174A5B",
        fontSize: 20,
        marginTop: 10,
        fontFamily: 'ArialBold'
    },
    lampName: {
        fontFamily: 'ArialBold',
        color: "#174A5B",
        fontSize: 50,
        lineHeight: 64
    },
    lampImage: {
        backgroundColor: "#fff",
        borderRadius: 130/2,
        height: 130,
        width: 130,
        borderWidth: 2,
        borderColor: 'rgba(195, 220, 147, 0.35)',
        justifyContent: "center",
        alignItems: 'center',
        marginRight: 30,
    },
    lampIcon: {
        transform: [{ scale: 0.55 }],
    },
    videoContainer: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 15,
        width: '90%',
        height: 290,
        elevation: 9,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
    },
    text: {
        backgroundColor: "#174A5B",
        color: "#fff",
        fontSize: 25,
        paddingVertical: 6,
        borderTopLeftRadius: 15,
        paddingLeft: 20,
        borderTopRightRadius: 15,
        textTransform: 'uppercase',
        fontFamily: 'ArialBold',
    },
    partImage: {
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
        flex: 0.75,
        transform: [{ scale: 0.8 }],
    },
    videoImage: {
        flex: 1,
        borderRadius: 18,
        transform: [{ scale: 0.85 }],
        height: "95%",
        marginBottom: 10,
    },
    cardRow: {
        flexDirection: "row",
        alignContent: "center"
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
    lastContainer: {
        marginBottom: 200
    }
});

export default LampVideosScreen;

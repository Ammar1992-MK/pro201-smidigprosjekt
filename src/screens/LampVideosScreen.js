import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView, Text, Image} from "react-native";

import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import {lamps} from "../utils/fakeDb";

const LampVideosScreen = ({navigation, route}) => {
    const [clickedLamp, setClickedLamp] = useState({});
    let lamp = route.params;

    useEffect(() => {
        setClickedLamp(lamp)
    })

    const lamps_div = lamps.map((el, i) => {
        const {name, image} = el;
        console.log(name);
        if (name === clickedLamp.lamp) {
            lampImage = image;
        }
    });
    let lampImage;


    return (
        <>
            <NavigationBar icon={true} title="CHANGE PART" navigation={navigation}/>
            <View style={LampVideosScreenStyles.alphaContainer}>
                <View style={LampVideosScreenStyles.container}>
                    <View style={LampVideosScreenStyles.VideoLampCard}>
                        <Text style={LampVideosScreenStyles.header}>HOW TO REPAIR</Text>
                        <Text style={LampVideosScreenStyles.lampName}>{clickedLamp.lamp}</Text>
                    </View>
                    <View style={LampVideosScreenStyles.lampImage}>
                        <Image style={LampVideosScreenStyles.lampIcon} source={lampImage} />
                    </View>
                </View>
                <ScrollView>
                    <TouchableOpacity
                        style={LampVideosScreenStyles.videoContainer}
                        onPress={() => navigation.navigate('LearnVideoPlayerScreen')}
                    >
                        <Text style={LampVideosScreenStyles.text}>CIRCUIT CARD</Text>
                        <View style={LampVideosScreenStyles.cardRow}>
                        <Image
                            style={LampVideosScreenStyles.partImage}
                            source={require("../../assets/product-images/circuit_card.png")}
                        />
                            <Image
                                style={LampVideosScreenStyles.videoImage}
                                source={require("../../assets/video-images/circuit_card-movie.png")}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={LampVideosScreenStyles.videoContainer}
                        onPress={() => navigation.navigate('LearnVideoPlayerScreen')}
                    >
                        <Text style={LampVideosScreenStyles.text}>BATTERY</Text>
                        <View style={LampVideosScreenStyles.cardRow}>
                            <Image
                                style={LampVideosScreenStyles.partImage}
                                source={require("../../assets/product-images/battery.png")}
                            />
                            <Image
                                style={LampVideosScreenStyles.videoImage}
                                source={require("../../assets/video-images/circuit_card-movie.png")}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={LampVideosScreenStyles.videoContainer}
                        onPress={() => navigation.navigate('LearnVideoPlayerScreen')}
                    >
                        <Text style={LampVideosScreenStyles.text}>LIGHT</Text>
                        <View style={LampVideosScreenStyles.cardRow}>
                            <Image
                                style={LampVideosScreenStyles.partImage}
                                source={require("../../assets/product-images/light_bulb.png")}
                            />
                            <Image
                                style={LampVideosScreenStyles.videoImage}
                                source={require("../../assets/video-images/circuit_card-movie.png")}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={LampVideosScreenStyles.videoContainer}
                        onPress={() => navigation.navigate('LearnVideoPlayerScreen')}
                    >
                        <Text style={LampVideosScreenStyles.text}>MOTOR</Text>
                        <View style={LampVideosScreenStyles.cardRow}>
                            <Image
                                style={LampVideosScreenStyles.partImage}
                                source={require("../../assets/product-images/cogs.png")}
                            />
                            <Image
                                style={LampVideosScreenStyles.videoImage}
                                source={require("../../assets/video-images/circuit_card-movie.png")}
                            />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        </>
    );
}

const LampVideosScreenStyles = StyleSheet.create({
    alphaContainer: {
        backgroundColor: '#F3F8E9',
        flex: 1,
        fontFamily: 'ArialBold',
    },
    container: {
        flexDirection: "row",
        borderWidth: 3,
        borderColor: "#C3DC93",
        margin: 30,
        height: "15%",
        borderRadius: 10,
        justifyContent: "space-evenly",
        alignContent: "center"
    },
    VideoLampCard: {
        marginLeft: 30,
        flex: 1,
    },
    header: {
        color: "#174A5B",
        fontSize: 20,
        marginTop: 10,
        fontWeight: "normal"
    },
    lampName: {
        fontFamily: 'ArialBold',
        fontWeight: "bold",
        color: "#174A5B",
        fontSize: 50,

    },
    Image: {
        borderRadius: 1000,
        transform: [{ scale: 0.55 }],
        backgroundColor: "#ffffff",
        width: "27%",
        height: "150%",
        justifyContent: "center",
        alignContent: "center",
        bottom: "4%"
    },
    Images: {
        flex: 1,
        resizeMode: "contain",
    },
    lampImage: {
        transform: [{ scale: 0.51 }],
        backgroundColor: "#FFFFFF",
        borderRadius: 100,
        height: 210,
        width: 210,
        borderWidth: 3,
        borderColor: "#C3DC93",
        justifyContent: "center",
        alignContent: "center",
        bottom: "6%",
        left: "10%"
    },
    lampIcon: {
        transform: [{ scale: 0.95 }],
        right: "15%",
    },
    videoContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 15,
        width: '90%',
        height: 250,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
    },
    text: {
        backgroundColor: '#174A5B',
        color: '#fff',
        fontSize: 25,
        textAlignVertical: 'bottom',
        textAlign: 'center',
        height: '17%',
        paddingHorizontal: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignSelf: 'stretch',
    },
    partImage: {
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
        marginTop: 20,
        marginBottom: 10,
        flex: 0.75,
        height: 175,
    },
    videoImage: {
        flex: 1,
        borderRadius: 20,
        height: "85%",
        margin: 20,
    },
    cardRow: {
        flexDirection: "row",
        alignContent: "center"
    }
});

export default LampVideosScreen;

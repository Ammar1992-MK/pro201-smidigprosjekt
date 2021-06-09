import React, {useState, useRef, useEffect} from "react";
import {Video, AVPlaybackStatus} from "expo-av";
import VideoPlayer from "expo-video-player";

import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image
} from "react-native";

import {NavigationBar} from "../components/NavigationBar/NavigationBar";
import {BackButton} from "../components/BackButton";
import {spareParts} from "../utils/fakeDb";

const LearnVideoPlayerScreen = ({navigation, route}) => {
    const video = useRef(null);
    const [status, setStatus] = useState();
    const [parts, setParts] = useState({});

    const { name, id } = route.params;

    useEffect(() => {
        setParts({ name, id });
    }, []);

    const parts_div = spareParts.map((el, i) => {
        const {id, image} = el;
        if (id === parts.id) {
            partImage = image;
        }
    });
    let partImage;

    return (
        <>
            <NavigationBar icon={true} title="CHANGE PART" navigation={navigation}/>
            <View style={styles.container}>
                <View>
                    <Video
                        ref={video}
                        style={styles.videoStyle}
                        source={{
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                        }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.bottomLeftContainer}>
                        <Text style={styles.titleTop}>HOW TO CHANGE</Text>
                        <Text style={styles.titleMain}>{parts.name}</Text>
                        <Text style={styles.videoDescription}>In this video you will be able to learn and
                            understand how to change the {parts.name} on your
                            Sunbell Smart lamp. We will cover the whole process from start to finish.
                        </Text>
                    </View>
                    <View style={styles.bottomRightContainer}>
                        <View style={styles.sparePartImageContainer}>
                            <Image style={styles.sparePartImage}
                                source={partImage}/>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.navigateButtons}>
                <BackButton onPress={() => navigation.navigate('LampVideosScreen')} buttonStyle="outlined"/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F8E9',
        alignItems: 'center',
    },
    videoStyle: {
        alignSelf: 'center',
        width: Dimensions.get('window').width,
        height: 432,
    },
    bottomContainer: {
        borderColor: 'rgba(195, 220, 147, 0.35)',
        borderRadius: 24,
        borderWidth: 3,
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        width: '90%',
        marginTop: 20
    },
    bottomLeftContainer: {
        flex: 1.25,
    },
    bottomRightContainer: {
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleTop: {
        fontSize: 20,
        color: '#174A5B',
        fontFamily: 'Arial'
    },
    titleMain: {
        fontSize: 48,
        color: '#174A5B',
        fontFamily: 'ArialBold',
        lineHeight: 64
    },
    videoDescription: {
        fontSize: 19,
        lineHeight: 28
    },
    sparePartImageContainer: {
        height: 200,
        width: 200,
        borderRadius: 200/2,
        borderWidth: 2,
        borderColor: 'rgba(195, 220, 147, 0.35)',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    sparePartImage: {
        transform: [{ scale: 0.7 }],
    },
    buttonContainer: {
        marginLeft: 10,
        marginBottom: 10
    },
        navigateButtons: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
        paddingHorizontal: '5%',
        paddingTop: 0,
        paddingBottom: 20,
		position: 'absolute',
		bottom: 0,
        backgroundColor: 'rgba(243, 248, 233, 0.9)'
	},
});


export default LearnVideoPlayerScreen;

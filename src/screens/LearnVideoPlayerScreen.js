import React, {useState, useRef} from "react";
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

const LearnVideoPlayerScreen = ({navigation}) => {
    const video = useRef(null);
    const [status, setStatus] = useState();
    return (
        <>
            <NavigationBar icon={true} title="CHANGE PART" navigation={navigation}/>
            <View style={styles.container}>
                <View style={styles.videoContainer}>
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
                        <Text style={styles.titleMain}>Battery</Text>
                        <Text style={styles.videoDescription}>In this video you will be able to learn{"\n"}and
                            understand how to
                            change the{"\n"}battery on your
                            Sunbell Smart lamp. {"\n"}We will cover the whole process from start to finish.
                        </Text>
                    </View>
                    <View style={styles.bottomRightContainer}>
                        <Image style={styles.sparePartImage}
                               source={require('../../assets/product-images/battery.png')}/>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <BackButton differentButton={true} onPress={() => navigation.navigate('LearnSelectLampScreen')}/>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
    },
    videoStyle: {
        alignSelf: 'center',
        width: Dimensions.get('window').width,
        height: 432,
    },
    bottomContainer: {
        borderColor: '#C3DC9335',
        borderRadius: 30,
        borderWidth: 3,
        padding: 20,
        flexDirection: 'row',
        width: '90%',
        marginTop: 20
    },
    bottomLeftContainer: {
        flex: 1,
    },
    bottomRightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleTop: {
        fontSize: 24,
        color: '#174A5B'
    },
    titleMain: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#174A5B',
    },
    videoDescription: {
        fontSize: 20
    },
    sparePartImage: {
        height: 150,
        width: 200,
        borderRadius: 100,
        borderColor: '#C3DC9335',
    },
    buttonContainer: {
        marginLeft: 10,
        marginBottom: 10
    }
});


export default LearnVideoPlayerScreen;
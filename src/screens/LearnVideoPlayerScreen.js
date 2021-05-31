import React, {useState} from "react";
import {Video, AVPlaybackStatus} from "expo-av";
import VideoPlayer from "expo-video-player"

import {
    View,
    StyleSheet,
} from "react-native";

import {NavigationBar} from "../components/NavigationBar/NavigationBar";

const LearnVideoPlayerScreen = ({navigation}) => {

    return (
        <>
            <NavigationBar icon={true} title="CHANGE PART" navigation={navigation}/>
            <View>
                <VideoPlayer videoProps={{
                    shouldPlay: true,
                    resizeMode: Video.RESIZE_MODE_CONTAIN,
                    source: {
                        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    },
                }}
                    inFullscreen={false}
                />
                <View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({});


export default LearnVideoPlayerScreen;
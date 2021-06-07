import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView, Text, Image} from "react-native";

const VideoCard = () => {
    return (
    <TouchableOpacity
        style={LampVideosScreenStyles.videoContainer}
        onPress={() => navigation.navigate('LearnVideoPlayerScreen')}>
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
});

export default VideoCard;

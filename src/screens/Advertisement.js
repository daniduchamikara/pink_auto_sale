import React, { Component } from "react";
import Video from 'react-native-video';
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Advertisement extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Video source={{ uri: 'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4' }}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.videoError}               // Callback when video cannot be loaded
                    style={styles.backgroundVideo} />
            </View>
        );
    }
}
export default Advertisement;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});
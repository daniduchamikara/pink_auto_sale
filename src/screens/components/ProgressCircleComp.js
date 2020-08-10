import React from "react";
import ProgressCircle from "./components/ProgressCircle";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import { color } from "react-native-reanimated";




const ProgressCircleComp = ({ }) => {
    return (
        <View style={{ padding: '5%' }}>
            <ProgressCircle
                percent={30}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{'30%'}</Text>
            </ProgressCircle>
            <Text style={{ alignSelf: 'center', fontSize: 22 }}>Hello</Text>
        </View>
    );
}
export default ProgressCircleComp;


const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    mainText: {
        fontSize: 28,
        fontWeight: "bold"
    }
});
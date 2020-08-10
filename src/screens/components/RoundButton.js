import React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import { color } from "react-native-reanimated";




const RoundButton = ({ value, bcolour, textColor, title }) => {
    return (
        <View style={{ padding: '5%' }}>
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 100,
                    height: 100,
                    backgroundColor: `${bcolour}`,
                    borderRadius: 50,

                }}
            >
                <Text style={{ fontSize: 30, fontWeight: "bold", color: `${textColor}` }}>{value}</Text>
            </TouchableOpacity>
            <Text style={{ alignSelf: 'center', fontSize: 22 }}>{title}</Text>
        </View>
    );
}
export default RoundButton;


const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    mainText: {
        fontSize: 28,
        fontWeight: "bold"
    }
});
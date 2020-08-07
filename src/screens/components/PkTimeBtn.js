import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";

class PkTimeBtn extends Component {


    render() {
        return (
            <View >
                <TouchableOpacity style={[{
                    flex: 1,
                    margin: '8%',
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    underlayColor: 'black',
                    borderRadius: 10,
                    backgroundColor: '#ffe6ee',
                    elevation: 5
                }, this.props.customStyle]}>
                    <Text style={[styles.buttonName]}>{this.props.title}</Text>
                    <Text style={[styles.buttonName]}>{this.props.time}</Text>

                </TouchableOpacity>


            </View>
        );
    }
}
export default PkTimeBtn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

});
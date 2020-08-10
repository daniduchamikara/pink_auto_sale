import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,

} from "react-native";
import BigButton from "./components/BigButton";
import VerifyBox from "./components/vrificationBox"
import { ScrollView } from "react-native-gesture-handler";



export default class Dashboard extends Component {



    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.container}>
                    <View style={{ alignSelf: 'center' }}>
                        <Image resizeMode={'stretch'} style={{ width: 100, height: 100, borderRadius: 100, margin: 30 }} source={require('../assets/images/logo.jpg')} />
                    </View>
                    <View style={{ padding: 10, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20 }}>Verification Code OTP</Text>
                        <Text style={{ color: '#b2beb5', fontSize: 14 }}>verification code send to</Text>
                        <Text style={{ color: 'black', fontSize: 15 }}>(+94)711348650</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <VerifyBox />
                        <VerifyBox />
                        <VerifyBox />
                        <VerifyBox />
                        <VerifyBox />
                    </View>
                    <View style={{ height: 60 }}></View>


                    <BigButton style={{}}
                        title='Verify & Continue'
                        onPressBtn={() => this.props.navigation.navigate('Dashboard')}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        flexDirection: 'column',
        margin: 20,
        backgroundColor: 'white'

    },
});

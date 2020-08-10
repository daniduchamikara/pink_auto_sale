import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,

} from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import BigButton from "./components/BigButton";


import { ScrollView } from "react-native-gesture-handler";
import FormInput from "./components/FormInput";
import InputTextNew from "./components/InputTextNew";


export default class Registration extends Component {

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={true} style={{ backgroundColor: 'white' }}>

                <View style={styles.container}>
                    <View style={{ alignSelf: 'center', height: 150 }}>
                        <Image resizeMode={'contain'} style={{ width: 100, height: 100, borderRadius: 100 }} source={require('../assets/images/logo.jpg')} />
                    </View>
                    <View style={{ alignSelf: 'flex-start' }}>
                        <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Registration</Text>
                    </View>
                    <View style={{ width: '100%', alignSelf: 'flex-start' }}>
                        <FormInput
                            name="user"
                            title=''
                            placeholder='Enter Your Name'
                        />
                        <FormInput
                            name="idcard"
                            title=''
                            placeholder='Enter Your nic'
                        />
                        <FormInput
                            name="mobile1"
                            title=''
                            placeholder='Enter Your Mobile Number'
                        />
                        <FormInput
                            name="mail"
                            title=''
                            placeholder='Enter Your Email Address'
                        />
                        <FormInput
                            name="home"
                            title=''
                            placeholder='Enter Your Address'
                        />
                    </View>
                    <View style={{ width: '100%', paddingTop: '5%' }}>
                        <BigButton
                            title='Register'
                            onPressBtn={() => this.props.navigation.navigate('Dashboard')}
                        />
                    </View>
                    <View style={{ width: '100%', paddingTop: '5%', justifyContent: 'center' }}>
                        <Text style={{ alignSelf: 'center' }}>Back To Login </Text>
                    </View>

                </View>

            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '100%',
        padding: 20

    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 50

    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    itemName: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        marginLeft: 10,
        alignSelf: 'flex-start',
    },
    subitemName: {
        fontSize: 20,
        color: '#777474',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginLeft: 10,
    },
});

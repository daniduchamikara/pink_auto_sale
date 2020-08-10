import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    Modal,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView

} from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import ProgressCircle from 'react-native-progress-circle'

import BigButton from "./components/BigButton";
import RoundButton from "./components/RoundButton";


export default class Dashboard extends Component {

    state = {
        visible: false, //state of modal default false  
    }

    visibleModal() {
        this.setState({
            visible: !this.state.visible
        })
    }



    render() {
        const items = [
            { name: 'BMW X1', nmber: 'SP KS-3567', img: require('../assets/images/bmw.png') },
            { name: 'Benz E200', nmber: 'SP KS-2567', img: require('../assets/images/bmw.png') },
            { name: 'Audi A4', nmber: 'SP KS-4567', img: require('../assets/images/bmw.png') },

        ];
        return (
            <View style={styles.container}>
                <Modal
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                    isVisible={this.state.visible}
                    animationIn={'fadeInUpBig'}
                    animationOut={'fadeOutDownBig'}
                    animationInTiming={500}
                    animationOutTiming={500}>
                    <TouchableOpacity style={styles.modal} onPress={() => this.visibleModal()}>

                    </TouchableOpacity>

                </Modal>

                <View style={{ flexDirection: 'row', height: 40 }}>
                    <Icon name='menu' size={25} color={'black'} />
                    <View style={{ flex: 1 }} />
                    <Icon name='ios-notifications' size={25} color={'black'} />
                    <View style={{ flex: 0.03 }} />
                    <Icon name='chatbubble-ellipses-outline' size={25} color={'black'} />
                </View>
                <View style={{ alignSelf: 'flex-start', width: '100%' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Your Performance</Text>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                        <View>
                            <RoundButton
                                value='121'
                                bcolour='#D4CECA'
                                textColor='#000000'
                                title=''
                            />
                            <Text style={{ fontSize: 12 }}>Daily Target</Text>
                        </View>
                        <View>
                            <RoundButton
                                value='121'
                                bcolour='#FDA0DB'
                                textColor='#E80A97'
                                title=''
                            />
                            <Text style={{ fontSize: 12 }}>Daily Target</Text>
                        </View>
                        <View style={{ paddingBottom: '5%' }} >
                            <ProgressCircle
                                percent={55}
                                radius={50}
                                borderWidth={12}
                                color="#3399FF"
                                shadowColor="#999"
                                bgColor="#fff"
                            >
                                <Text style={{ fontSize: 18 }}>{'55%'}</Text>
                            </ProgressCircle>
                            <Text style={{ alignSelf: 'center', fontSize: 12, paddingTop: '5%' }}>Daily Target</Text>
                        </View>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '100%', backgroundColor: '#E7EFF2' }}>
                    <Text style={{ fontSize: 20, color: '#9E9E9E', padding: '5%', width: '70%' }}>Latest Commissin </Text>
                    <Text style={{ fontSize: 20, color: '#F21893', padding: '5%' }}>5500 LKR </Text>
                </View>


                <Text style={styles.title}>Select Type of ads</Text>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <TouchableOpacity style={{
                        height: 100,
                        flex: 1,
                        backgroundColor: '#f6e6f1',
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        underlayColor: '#D360CE'
                    }}>
                        <Image source={require('../assets/images/car-wash.png')} resizeMode={'stretch'} style={{ width: 50, height: 50 }} />
                        <Text style={styles.buttonName}>Nano Coating </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 100,
                        flex: 1,
                        backgroundColor: '#f6e6f1',
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../assets/images/car-wash.png')} resizeMode={'stretch'} style={{ width: 50, height: 50 }} />
                        <Text style={styles.buttonName}>Nano Coating </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 100,
                        flex: 1,
                        backgroundColor: '#f6e6f1',
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../assets/images/car-wash.png')} resizeMode={'stretch'} style={{ width: 50, height: 50 }} />
                        <Text style={styles.buttonName}>Nano Coating </Text>

                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <TouchableOpacity style={{
                        height: 100,
                        flex: 1,
                        backgroundColor: '#f6e6f1',
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../assets/images/car-wash.png')} resizeMode={'stretch'} style={{ width: 50, height: 50 }} />
                        <Text style={styles.buttonName}>Nano Coating </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 100,
                        flex: 1,
                        backgroundColor: '#f6e6f1',
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../assets/images/car-wash.png')} resizeMode={'stretch'} style={{ width: 50, height: 50 }} />
                        <Text style={styles.buttonName}>Nano Coating </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 100,
                        flex: 1,
                        backgroundColor: '#f6e6f1',
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../assets/images/car-wash.png')} resizeMode={'stretch'} style={{ width: 50, height: 50 }} />
                        <Text style={styles.buttonName}>Nano Coating </Text>

                    </TouchableOpacity>

                </View>
                <View style={{ width: '100%', paddingTop: '2%' }}>
                    <BigButton
                        title='New Customer'
                        onPressBtn={() => this.visibleModal()}
                    />
                </View>



            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
    },

    modal: {
        width: '70%',
        height: '70%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,
    },

    gridView: {
        marginTop: 10,
        flex: 1,
    },

    detailContainer: {
        width: '95%',
        height: 100,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 20,
    },

    itemContainer: {
        backgroundColor: 'white',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        height: 150,
        width: 120,
        marginLeft: 9
    },
    buttonContainer: {
        backgroundColor: 'white',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        height: 25,
        width: 25,
        marginLeft: 9,
        padding: 10
    },
    itemName: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },
    buttonName: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        padding: 5
    },
    itemNumber: {
        fontWeight: '600',
        fontSize: 12,
        color: 'gray',
    },
    nextBtn: {
        backgroundColor: '#000000',
        width: '100%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontSize: 25,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    }
});

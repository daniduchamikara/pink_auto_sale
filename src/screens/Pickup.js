import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,

} from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from "react-native-gesture-handler";
import PickUpBtn from "./components/PkTypBtn";
import PkTimeBtn from "./components/PkTimeBtn";
import BigButton from "./components/BigButton";

import CalendarStrip from 'react-native-slideable-calendar-strip';




export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            selectedDate: Date()
        }
    }


    render() {

        const items = [
            { name: 'Car Cleaner', nmber: 'SP KS-3567', img: require('../assets/images/addOn3.png') },
            { name: 'Air Freshner', nmber: 'SP KS-2567', img: require('../assets/images/addOn1.png') },
            { name: 'Tire Cleaner', nmber: 'SP KS-4567', img: require('../assets/images/addOn2.png') },
            { name: 'Cleaners', nmber: 'SP KS-4567', img: require('../assets/images/addOn1.png') },
            { name: 'Air Freshners', nmber: 'SP KS-4567', img: require('../assets/images/addOn2.png') },

        ];
        return (
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", margin: 2, width: '100%' }}>
                        <Ionicons style={{ padding: 5 }} name="chevron-back" size={28} color={'#FF1493'} />
                        <Text style={{ fontSize: 20, paddingTop: 5, fontWeight: 'bold' }}>Nano Ceramic Coating</Text>
                        <Text style={{ fontSize: 20, padding: 5, marginRight: 10 }}>Rs 75000</Text>
                    </View>

                    <View style={{ width: '100%', paddingLeft: 38, flexDirection: 'column', borderBottomWidth: 1.5 }}>
                        <Text style={{ fontSize: 15 }}>Service Time : 4 Days</Text>
                        <Text style={{ fontSize: 10, paddingBottom: 5 }}>1 vehicle added</Text>

                    </View>
                    <View style={{ width: '100%' }}>
                        <View>
                            <Text style={{ fontSize: 15, paddingTop: 20, fontWeight: 'bold' }}>Shedule Pickup</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: "center" }}>
                            <PickUpBtn
                                title='Pickup'
                                customStyle={{ margin: '10.5%', height: 55 }}
                            />
                            <PickUpBtn
                                title='Reserve'
                                customStyle={{ margin: '10.5%', height: 55 }}
                            />
                            <PickUpBtn
                                title='Shedule'
                                customStyle={{ margin: '10.5%', height: 55 }}
                            />
                        </View>

                    </View>
                    <View style={{ width: '100%' }}>
                        <View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Shedule Pickup</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: "center" }}>
                            <PickUpBtn
                                title='Pickup'
                                customStyle={{ flex: 1, height: 30, margin: '10.5%' }}
                            />
                            <PickUpBtn
                                title='Reserve'
                                customStyle={{ height: 30, margin: '10.5%' }}
                            />
                            <PickUpBtn
                                title='Shedule'
                                customStyle={{ height: 30, margin: '10.5%' }}
                            />
                        </View>

                    </View>
                    <View style={{ width: '100%', margin: 3, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', alignSelf: "center", margin: 20 }}>
                            <CalendarStrip

                                selectedDate={this.state.selectedDate}
                                onPressDate={(date) => {
                                    this.setState({ selectedDate: date });
                                }}
                                onPressGoToday={(today) => {
                                    this.setState({ selectedDate: today });
                                }}
                                onSwipeDown={() => {
                                    alert('onSwipeDown');
                                }}
                                markedDate={[]}
                                weekStartsOn={1} // 0,1,2,3,4,5,6 for S M T W T F S, defaults to 0
                            />
                        </View>
                    </View>
                    <View style={{ width: '100%' }}>
                        <View style={{}}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Shedule Pickup</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: '15%', marginRight: '15%' }}>
                            <PkTimeBtn
                                title='10.00-11.00'
                                time="AM"
                                customStyle={{ height: 50 }}
                            />
                            <PkTimeBtn
                                title='11.00-12.00'
                                time="AM"
                                customStyle={{ height: 50 }}
                            />
                            <PkTimeBtn
                                title='12.00-01.00'
                                time="AM"
                                customStyle={{ height: 50 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: '15%', marginRight: '15%' }}>
                            <PkTimeBtn
                                title='01.00-02.00'
                                time="AM"
                                customStyle={{ height: 50 }}
                            />
                            <PkTimeBtn
                                title='02.00-03.00'
                                time="AM"
                                customStyle={{ height: 50 }}
                            />
                            <PkTimeBtn
                                title='03.00-04.00'
                                time="AM"
                                customStyle={{ height: 50 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: '15%', marginRight: '15%' }}>
                            <PkTimeBtn
                                title='04.00-05.00'
                                time="AM"
                                customStyle={{ height: 50 }}
                            />
                            <PkTimeBtn
                                title='05.00-06.00'
                                time="AM"
                                customStyle={{ height: 50 }}
                            />
                            <PkTimeBtn
                                title='06.00-07.00'
                                time="AM"
                                customStyle={{ height: 50 }}
                            />
                        </View>

                    </View>


                    <View style={{ width: '100%' }}>
                        <Text style={{ fontSize: 15, paddingTop: 20, fontWeight: 'bold' }}>Service Type</Text>
                        <View style={{ padding: 10 }}>
                            <DropDownPicker
                                items={[
                                    { label: 'Item 1', value: 'item1' },
                                    { label: 'Item 2', value: 'item2' },
                                ]}
                                defaultIndex={0}
                                containerStyle={{ height: 40 }}
                                onChangeItem={item => console.log(item.label, item.value)}
                            />
                        </View>

                    </View>
                    <View>
                        <View style={{ height: 170 }}>
                            <FlatGrid
                                itemDimension={200}
                                data={items}
                                style={styles.gridView}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.itemContainer}>
                                        <Image source={item.img} resizeMode={'stretch'}
                                            style={{ width: 100, height: 80 }} />
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemNumber}>{item.nmber}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>

                    <BigButton style={{}}
                        title='Verify & Continue'
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
        // margin: 20,
        padding: 10,
        backgroundColor: 'white'

    },
});

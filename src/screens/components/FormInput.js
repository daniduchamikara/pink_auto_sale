import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";

import Icon from 'react-native-vector-icons/AntDesign'


const FormInput = ({ title, placeholder, name }) => {
    return (
        <View style={styles.container}>
            <Text style={{ margin: 5, fontSize: 20 }}>{title}</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10,
                width: '100%',
                padding: 5,
                backgroundColor: '#EFEFEF'

            }}>
                <Icon
                    name={name}
                    size={25} color={'#000000'}
                />
                <TextInput
                    style={{ padding: 10 }}
                    placeholder={placeholder}
                    placeholderTextColor={'#000000'}
                />
            </View>

        </View>
    );
}
export default FormInput;


const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});
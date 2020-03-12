import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
const BottomNav = (props) => {
    return (
    <View style={styles.container}>
        <View style={styles.inncerContainer}>
            <Ionicons name="ios-home" color="#555" size={25} />
        </View>
        <View style={styles.inncerContainer}>
            <Ionicons name="ios-search" color="#555" size={30} />
        </View>
            
        <View style={styles.inncerContainer}>
            <Ionicons name="md-add" color="#555" size={30} />
        </View>
        <View style={styles.inncerContainer}>
            <MaterialIcons name="chat-bubble" color="#555" size={30} />
        </View>
    </View>);
}


export default BottomNav;

const styles = StyleSheet.create({
    container: {
        padding :10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : '#fff',
        borderRadius: 30,
        borderColor : '#ccc',
        borderWidth : 0.5
    },
    inncerContainer: {
        paddingTop:3,
        paddingBottom: 3,
        paddingHorizontal:20,
    }
})

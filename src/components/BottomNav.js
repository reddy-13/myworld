import React from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const BottomNav = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.inncerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="ios-home" color="#555" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.inncerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name="ios-search" color="#555" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.inncerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name="md-add" color="#555" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.inncerContainer}>
        <MaterialIcons name="chat-bubble" color="#555" size={30} />
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    bottom: 20,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    borderColor: '#ccc',
    borderWidth: 0.5,
  },
  inncerContainer: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingHorizontal: 20,
  },
});

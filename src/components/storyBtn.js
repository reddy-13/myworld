import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Modal,
} from 'react-native';
import {Button} from '@constants/atoms/Button';
import {Text} from '@constants/atoms/Text';
import faker from 'faker';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';

const StoryBtn = props => {
  const navigation = useNavigation();
  navigation.setOptions({});

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: width,

        position: 'absolute',
        zIndex: 10,
        marginTop: 40,
        marginBottom: 40,
        right: 10,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ddd',
          height: 35,
          width: 55,
          borderRadius: 10,
          margin: 1,
        }}>
        <Text>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('StatusModal')}
        style={{width: 50}}>
        <Image source={{uri: faker.image.avatar()}} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 55,
    width: 55,
    borderRadius: 30,
    marginRight: 20,
  },
});
export default StoryBtn;

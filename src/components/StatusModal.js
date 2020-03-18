import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ProgressBarAndroid,
  Dimensions,
} from 'react-native';

import faker from 'faker';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
const StatusModal = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    title: faker.name.findName(),
    headerTransparent: true,
    headerBackTitleVisible: false,
    headerTitleStyle: {
      color: '#fff',
    },
  });
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Image
        source={{uri: faker.image.avatar()}}
        style={{width: width, height: height}}
      />
    </View>
  );
};

export default StatusModal;

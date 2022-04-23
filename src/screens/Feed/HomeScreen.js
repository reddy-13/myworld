//MyWorld app HomeScreen
//Home Screen For Video Feeds
//code date :  28-02-2020 //

import React, {useState} from 'react';
import {View, Text, Button, Modal, Image, Dimensions} from 'react-native';
import Home from '@components/Home';
import faker from 'faker';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = props => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Home
        onScroll={e => {
          // console.log(e);
        }}
        navigation={navigation}
      />
    </View>
  );
};

export default HomeScreen;

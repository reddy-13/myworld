//MyWorld app HomeScreen
//Home Screen For Video Feeds
//code date :  28-02-2020 //

import React from 'react';
import {View, Text, Button} from 'react-native';
import Home from '@components/Home';

const HomeScreen = (props, navigation) => {
  return (
    <View style={{flex: 1}}>
      <Home
        onScroll={e => {
          // console.log(e);
        }}
      />
    </View>
  );
};

export default HomeScreen;

/* 
MyWorld app BottomNavigator 
    Home Screen For Video Feeds
    code date :  28-02-2020 
devloper // G GOUTHAM REDDY */
import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Animated from 'react-native-reanimated';
const Tab = createBottomTabNavigator();
// importing Sceens
import HomeScreen from '@screens/Feed/HomeScreen';
import ProfileScreen from '@screens/User/ProfileScreen';
import Search from '@screens/search/';
import CameraScreen from '@screens/Camera/';
import SettingsIcon from '@screens/Icons/SettingsIcon';
// import icon from '../assets/icons';
import Chatscreen from '@screens/Chat';
import StickySample from '@screens/Test';

const HeaderShown = route => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Home';
  switch (routeName) {
    case 'Home':
      return true;
  }
};

const BottomNav = state => {
  // const inputRange = state.routes.map((_, i) => i);
  // const opacity = Animated.interpolate(position, {
  //   inputRange,
  //   outputRange: inputRange.map(i => (i === index ? 1 : 0)),
  // });

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        lazy={true}
        tabBarOptions={{
          style: {
            position: 'absolute',
            left: 80,
            right: 60,
            borderRadius: 50,
            borderTopWidth: 0,
            marginBottom: 30,
            height: 60,
            width: '60%',
            alignSelf: 'center',
            elevation: 2,
            opacity: 0.99,
          },
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{tabBarVisible: false}}
        />
        <Tab.Screen name="Chat" component={Chatscreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        {/* <Tab.Screen name="Seticon" component={SettingsIcon} /> */}
      </Tab.Navigator>
    </View>
  );
};

export default BottomNav;

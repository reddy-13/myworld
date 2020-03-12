/* 
MyWorld app MainNavigator 
    Home Screen For Video Feeds
    code date :  28-02-2020 
devloper // G GOUTHAM REDDY */

import React from 'react';

import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
//importing botom navigator
import BottomNav from './BottomNavigation';

//importing screen from root/screens/
import HomeScreen from '@screens/Feed/HomeScreen';
import ProfileScreen from '@screens/User/ProfileScreen';
import Camera from '@screens/Camera/';
import search from '@screens/search';
import ChatScreen from '@screens/Chat';
import {Button} from '@constants/atoms/Button';
import {Text} from '@constants/atoms/Text';
// inistiating Stact navigaton
const Stack = createStackNavigator();

const StoryBtn = () => {
  return (
    <Button
      onPress={() => alert('This is a button!')}
      color="#ddd"
      style={{
        borderRadius: 50,
        height: 50,
        width: 50,
        marginLeft: 10,
        marginTop: 40,
        elevation: 0,
      }}></Button>
  );
};

const showStoryButton = route => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Home';
  switch (routeName) {
    case 'Home':
      return StoryBtn;
  }
};

const HeaderTrans = route => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Home';
  switch (routeName) {
    case 'Home':
      return true;
      break;
    case 'Search':
      return true;
      break;
    case 'Camera':
      return true;
      break;
    case 'Search':
      return true;
  }
};

const enableGesture = route => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Home';
  switch (routeName) {
    case 'Home':
      return false;
      break;
    case 'Search':
      return false;
      break;
    case 'Camera':
      return true;
      break;
    case 'Search':
      return false;
  }
};

const gestureDirection = route => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Home';
  switch (routeName) {
    case 'Camera':
      return 'vertical';
  }
};

//Main navigator
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomNav}
        options={({route}) => ({
          headerShown: true,
          animationEnabled: true,
          headerTransparent: HeaderTrans(route),
          headerTitle: '',
          headerRight: showStoryButton(route),
        })}
      />
      <Stack.Screen
        name="Search"
        component={search}
        options={{headerShown: true}}
      />
      {/* <Stack.Screen name="Camera" component={Camera} options={{headerShown:false}} /> */}
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={({route}) => ({
          gestureEnabled: enableGesture(route),
          gestureDirection: gestureDirection(route),
        })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;

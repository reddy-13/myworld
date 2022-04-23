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
import StatusModal from '@components/StatusModal';
import SearchBar from '@components/SearchBar';
import ImageGallery from '@components/ImageGallery';

// import classes for testing
import imagegrid from '@classes/imagegrid';
// inistiating Stact navigaton
const Stack = createStackNavigator();

// const showStoryButton = route => {
//   const routeName = route.state
//     ? route.state.routes[route.state.index].name
//     : 'Home';
//   switch (routeName) {
//     case 'Home':
//       return StoryBtn;
//   }
// };

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
    case 'Chat':
      return false;
      break;
    case 'Profile':
      return true;
      break;
    case 'StatusModal':
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

const showHeader = route => {
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
    case 'Chat':
      return true;
      break;
    case 'Profile':
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
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Image"
        component={imagegrid}
        option={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={BottomNav}
        options={({route}) => ({
          headerShown: true,
          animationEnabled: true,
          headerTransparent: HeaderTrans(route),
          headerTitle: '',
          // headerRight: showStoryButton(route),
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
        options={{
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
          },
          headerTitleContainerStyle: {
            width: '80%',
          },
          headerTitleAlign: 'center',
          headerMode: 'float',
          headerTitle: props => (
            <SearchBar
              style={{backgroundColor: '#fff', opacity: 1, width: '100%'}}
              {...props}
              placeholderTextColor="#d1d1d1"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen name="Gallery" component={ImageGallery} />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={({route}) => ({
          gestureEnabled: enableGesture(route),
          gestureDirection: gestureDirection(route),
        })}
      />
      <Stack.Screen name="StatusModal" component={StatusModal} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

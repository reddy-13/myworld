/**
 * MyWorld App 
 * https://github.com/Cessini/Myworld
 *
 * BY - G GOUTHAM REDDDY
 * 
 * @format
 * @flow
 */
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '@navigation/MainNavigator';

const App = () => {
  return (
      <NavigationContainer>
        <MainNavigator/>
       
      </NavigationContainer>
   
  );
};


export default App;





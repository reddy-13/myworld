//MyWorld app ProfileScreen
//Home Screen For Video Feeds
//code date :  28-02-2020 //

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ProfileScreen = props => {
  const nav = props.navigation; // storing navigation prop
  nav.setOptions({title: 'Profile'}); // setting navigation name on screen
  return (
    <View style={styles.container}>
      <Text>Profile Screens</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default ProfileScreen;

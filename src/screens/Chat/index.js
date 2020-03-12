import React, {Component} from 'react';
import {View, Text, StatusBar, SegmentedControlIOS} from 'react-native';
import faker from 'faker';
import UserList from '@components/UserList';

import Header from '@components/Header';
export default class Chatscreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Header SearchBar={true}></Header>

        <UserList uri={faker.image.avatar()} userName={faker.name.findName()} />
        <UserList uri={faker.image.avatar()} userName={faker.name.findName()} />
        <UserList uri={faker.image.avatar()} userName={faker.name.findName()} />
        <UserList uri={faker.image.avatar()} userName={faker.name.findName()} />
        <UserList uri={faker.image.avatar()} userName={faker.name.findName()} />
        <UserList uri={faker.image.avatar()} userName={faker.name.findName()} />
        <UserList uri={faker.image.avatar()} userName={faker.name.findName()} />
        <UserList uri={faker.image.avatar()} userName={faker.name.findName()} />
        <UserList uri={faker.image.avatar()} userName={faker.name.findName()} />
        <UserList uri={faker.image.avatar()} userName={faker.name.findName()} />
        <UserList uri={faker.image.avatar()} userName={faker.name.findName()} />
      </View>
    );
  }
}

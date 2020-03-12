import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const UserList = props => {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.uri}} style={styles.image} />
      <View style={styles.userView}>
        <Text style={styles.userStyle}>{props.userName}</Text>
      </View>
      <View style={styles.userView}>
        <Text style={styles.userchat}>{props.userName}</Text>
      </View>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    marginTop: 10,
    marginLeft: 10,
    height: 55,
    width: 55,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  userView: {
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  userStyle: {
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 15,
  },
  userchat: {
    fontSize: 18,
    fontWeight: '900',
    color: '#e6ecf0',
    marginLeft: 15,
    marginTop: 20,
  },
});

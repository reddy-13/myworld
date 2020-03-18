import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '@components/SearchBar';

const Header = props => {
  return (
    <View style={styles.header}>
      {props.SearchBar === true && (
        <SearchBar
          style={{backgroundColor: '#f1f1f1'}}
          placeholderTextColor="#d1d1d1"
        />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: '#fff',
    paddingTop: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
  },
});

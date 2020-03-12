import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = props => {
  return (
    <View
      style={{
        ...style.customSearchInput,
        borderRadius: props.borderRadius,
      }}>
      <TextInput
        style={{...style.input, ...props.style}}
        placeholderTextColor={props.placeholderTextColor}
        placeholder="Search"></TextInput>
    </View>
  );
};

const style = StyleSheet.create({
  customSearchInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
    width: '90%',
    height: 45,

    justifyContent: 'center',
  },
  input: {
    paddingLeft: 30,
    fontSize: 18,
  },
});

export default SearchBar;

import React from 'react';
import {View, Button} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import settingsIcon from '../../assets/icons/settingsIcon.svg';

const SettingsIcon = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Setting"
        color="red"
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
      />
    </View>
  );
};

export default SettingsIcon;

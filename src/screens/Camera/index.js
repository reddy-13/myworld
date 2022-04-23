import React from 'react';
import {View, StyleSheet} from 'react-native';
import CameraComponent from '@components/CameraComponent';
import Style from './Style';

class CameraScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <CameraComponent navigation={this.props.navigation} />;
  }
}

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

import React, {Component} from 'react';
import {Text, View} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-crop-picker';
const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: [],
    };
  }
  render() {
    return (
      <View>
        <Text> Select Image </Text>
      </View>
    );
  }
}

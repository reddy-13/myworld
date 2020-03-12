import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Platform} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
// import {SvgCssUri} from 'react-native-svg';
// import Icon from '../../assets/icons/icon.svg';
class CameraComponent extends React.Component {
  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      isRecording: false,
    };
  }

  takePicture = () => {
    if (this.camera) {
      this.camera
        .capture()
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }
  };

  startRecording = () => {
    // .capture({
    //   mode: RNCamera.Constants.CaptureMode.video,
    //   totalSeconds: 30,
    //   audio: true,
    // })

    const options = {
      quality: RNCamera.Constants.VideoQuality['720p'],
      whiteBalance: RNCamera.Constants.WhiteBalance.auto,
    };

    if (this.camera) {
      this.camera
        .recordAsync(options)
        .then(data => {
          CameraRoll.saveToCameraRoll(data.uri, 'video');
          console.log(data.uri);
        })
        .catch(err => console.error(err));
      this.setState({
        isRecording: true,
      });
    }
  };

  stopRecording = () => {
    if (this.camera) {
      this.camera.stopRecording();
      this.setState({
        isRecording: false,
      });
    }
  };

  render() {
    return (
      <View style={styles.cameraContainer}>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          captureAudio={true}
          captureMode={RNCamera.Constants.Type.back}
        />
        <View style={[styles.overlay, styles.bottomOverlay]}>
          {(!this.state.isRecording && (
            <TouchableOpacity
              style={styles.captureButton}
              onPress={this.startRecording}>
              {/* <Icon width="50" height="50" /> */}
              <Text>START</Text>
            </TouchableOpacity>
          )) || (
            <TouchableOpacity
              style={styles.captureButton}
              onPress={this.stopRecording}>
              <Text> STOP</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
  },
});
export default CameraComponent;

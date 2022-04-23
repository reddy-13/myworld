import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Platform} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';

// import {SvgCssUri} from 'react-native-svg';
// import Icon from '../../assets/icons/icon.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class CameraComponent extends React.Component {
  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      isRecording: false,
      type: RNCamera.Constants.Type.front,
      isFlash: RNCamera.Constants.FlashMode.off,
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

  flash = flash => {
    if (flash == RNCamera.Constants.FlashMode.off) {
      this.setState({isFlash: RNCamera.Constants.FlashMode.on});
    } else if (flash == RNCamera.Constants.FlashMode.on) {
      this.setState({isFlash: RNCamera.Constants.FlashMode.off});
    }
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.cameraContainer}>
        <View
          style={{
            position: 'absolute',
            zIndex: 10,
            width: '100%',
            alignItems: 'center',
            bottom: 80,
          }}>
          {(!this.state.isRecording && (
            <MaterialCommunityIcons
              onPress={this.startRecording}
              name="circle-outline"
              style={{color: 'white', fontSize: 80}}
            />
          )) || (
            <MaterialCommunityIcons
              onPress={this.stopRecording}
              name="circle-outline"
              style={{
                color: 'yellow',
                fontSize: 80,
              }}
            />
          )}
        </View>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          flashMode={this.state.isFlash}
          style={styles.preview}
          type={this.state.type}
          captureAudio={true}
          captureMode={this.state.type}
        />

        <View style={[styles.overlay, styles.bottomOverlay]}>
          <MaterialCommunityIcons
            onPress={() => navigation.navigate('Gallery')}
            name="image-multiple"
            style={{color: 'white', fontSize: 46}}
          />
          {(this.state.isFlash === RNCamera.Constants.FlashMode.off && (
            <MaterialCommunityIcons
              onPress={() => this.flash(this.state.isFlash)}
              name="flash"
              style={{color: 'white', fontSize: 46, opacity: 0.5}}
            />
          )) || (
            <MaterialCommunityIcons
              onPress={() => {
                this.setState({
                  isFlash:
                    this.state.isFlash === RNCamera.Constants.FlashMode.on
                      ? RNCamera.Constants.FlashMode.off
                      : RNCamera.Constants.FlashMode.on,
                });
              }}
              name="flash"
              style={{color: 'white', fontSize: 46}}
            />
          )}

          <MaterialCommunityIcons
            name="plus-circle"
            style={{color: 'white', fontSize: 46}}
          />
          <MaterialCommunityIcons
            onPress={() => {
              this.setState({
                type:
                  this.state.type === RNCamera.Constants.Type.front
                    ? RNCamera.Constants.Type.back
                    : RNCamera.Constants.Type.front,
              });
            }}
            name="autorenew"
            style={{color: 'white', fontSize: 46}}
          />
          <MaterialCommunityIcons
            name="playlist-music"
            style={{color: 'white', fontSize: 46}}
          />
        </View>
      </View>
    );
  }
}

// const myNavigation = props => {
//   const navigation = useNavigation();
//   return <CameraComponent {...props} navigation={navigation} />;
// };
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
  },
  cameraContainer: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'transparent', //'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'transparent',
    borderRadius: 40,
  },
});
export default CameraComponent;

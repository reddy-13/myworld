import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', height: '20%', marginTop: 50}}>
          <View style={{flex: 3}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 27}}>
                Dr. S Devid Green
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
              <Text>20k Followers</Text>
              <Text> . </Text>
              <Text>200k Following</Text>
            </View>
          </View>
          <View
            style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('./Asset/49097.png')}
              style={{width: 110, height: 110, borderRadius: 55}}
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'column',
            paddingRight: 50,
            paddingLeft: 20,
            paddingBottom: 20,
            height: '8%',
            backgroundColor: '',
          }}>
          <Text style={{fontSize: 15, fontWeight: '600'}}>
            We're bulding the world's best community for creatives to share,grow
            and get hired.
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 3,
            height: 45,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: '#f1f1f1',
            borderRadius: 7,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              alignItems: 'center',
              paddingTop: 10,
              flex: 2,
              borderRadius: 5,
              marginRight: 5,
            }}>
            <Text>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'trans',
              alignItems: 'center',
              paddingTop: 10,
              flex: 2,
              borderRadius: 5,
              marginRight: 5,
            }}>
            <Text>Message</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            height: 45,
            backgroundColor: 'fff',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              borderBottomColor: '#000',
              borderBottomWidth: 2,
              alignItems: 'center',
              paddingTop: 10,
              flex: 2,
              marginRight: 5,
            }}>
            <Text>Rescent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'trans',
              alignItems: 'center',
              paddingTop: 10,
              flex: 2,
              borderRadius: 5,
              marginRight: 5,
            }}>
            <Text>Story</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'trans',
              alignItems: 'center',
              paddingTop: 10,
              flex: 2,
              borderRadius: 5,
              marginRight: 5,
            }}>
            <Text>Like</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.9,
                padding: 20,
                paddingRight: 0,
                paddingBottom: 0,
              }}>
              <Image
                source={require('./Asset/49097.png')}
                style={{width: 65, height: 130, borderRadius: 7}}
              />
            </View>
            <View style={{flex: 3, paddingTop: 30, paddingRight: 20}}>
              <Text>NDTV India</Text>
              <Text style={{fontSize: 19, fontWeight: '700'}}>
                I got surgery to look like a face filter
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16}}>345K views</Text>
                <Text style={{fontSize: 16, paddingLeft: 5}}>.</Text>
                <Text style={{fontSize: 16}}> 3h </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.9,
                padding: 20,
                paddingRight: 0,
                paddingBottom: 10,
              }}>
              <Image
                source={require('./Asset/49097.png')}
                style={{width: 65, height: 130, borderRadius: 5}}
              />
            </View>
            <View style={{flex: 3, paddingTop: 30, paddingRight: 20}}>
              <Text>NDTV India</Text>
              <Text style={{fontSize: 19, fontWeight: '700'}}>
                I got surgery to look like a face filter
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16}}>345K views</Text>
                <Text style={{fontSize: 16, paddingLeft: 5}}>.</Text>
                <Text style={{fontSize: 16}}> 3h </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import faker from 'faker';
import RescentCard from '@components/profile/RescentCard';
import StoryCard from '@components/profile/StoryCard';
import LikeCard from '@components/profile/LikeCard';
import Styles from './Style';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
export default class ProfileScreen extends Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'RESCENTS'},
      {key: 'second', title: 'STORY'},
      {key: 'third', title: 'LIKE'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = SceneMap({
    first: RescentCard,
    second: StoryCard,
    third: LikeCard,
  });
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.profileContainer}>
          <View style={Styles.profileInner}>
            <View style={Styles.userNameContainer}>
              <Text style={Styles.userNameText}>Dr. S Devid Green</Text>
            </View>
            <View style={Styles.followerContainer}>
              <Text>20k Followers</Text>
              <Text> . </Text>
              <Text>200k Following</Text>
            </View>
          </View>
          <View style={Styles.profileImageContainer}>
            <Image
              source={{uri: faker.image.avatar()}}
              style={{width: 110, height: 110, borderRadius: 55}}
            />
          </View>
        </View>

        <View style={Styles.decriptionContainer}>
          <Text style={Styles.descriptionText}>
            We're bulding the world's best community for creatives to share,grow
            and get hired.
          </Text>
        </View>

        <View style={Styles.tabs}>
          <TouchableOpacity style={Styles.folloBtn}>
            <Text>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.messageBtn}>
            <Text>Message</Text>
          </TouchableOpacity>
        </View>

        <TabView
          style={{flex: 1}}
          navigationState={this.state}
          renderScene={this._renderScene}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
          renderTabBar={props => (
            <TabBar
              {...props}
              labelStyle={{color: '#555'}}
              activeColor={{color: '#555'}}
              inactiveColor={{color: '#fdfdfd'}}
              indicatorStyle={styles.indeicator}
              style={styles.tabStyle}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  indeicator: {
    backgroundColor: '#111',
  },
  tabStyle: {
    backgroundColor: '#fff',
    elevation: 0,
  },
});

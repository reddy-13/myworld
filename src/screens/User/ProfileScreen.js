import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import faker from 'faker';
import RescentCard from '@components/profile/RescentCard';
import StoryCard from '@components/profile/StoryCard';
import LikeCard from '@components/profile/LikeCard';
import Styles from './Style';

import ProfileContainer from '@components/profile/ProfileContainer';

const {height, width} = Dimensions.get('window');
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
export default class ProfileScreen extends Component {
  state = {
    activeIndexindex: 0,
  };
  segmentClicked = index => {
    this.setState({
      activeIndexindex: index,
    });
  };
  // _handleIndexChange = index => this.setState({index});

  // _renderScene = SceneMap({
  //   first: RescentCard,
  //   second: StoryCard,
  //   third: LikeCard,
  // });
  renderSection = () => {
    console.log(this.activeIndexindex);

    if (this.state.activeIndexindex == 0) {
      return <RescentCard />;
    } else if (this.state.activeIndexindex == 1) {
      return <StoryCard />;
    } else if (this.state.activeIndexindex == 2) {
      return (
        <View style={{height: height * 2}}>
          <LikeCard />
        </View>
      );
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={Styles.container}>
          <ProfileContainer />

          <View
            style={{
              flexDirection: 'row',
              height: 45,
              backgroundColor: 'fff',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => this.segmentClicked(0)}
              style={[
                this.state.activeIndexindex == 0
                  ? {
                      backgroundColor: '#fff',
                      borderBottomColor: '#000',
                      borderBottomWidth: 2,
                      alignItems: 'center',
                      paddingTop: 10,
                      flex: 2,
                      marginRight: 5,
                    }
                  : {
                      backgroundColor: 'trans',
                      alignItems: 'center',
                      paddingTop: 10,
                      flex: 2,
                      borderRadius: 5,
                      marginRight: 5,
                    },
              ]}>
              <Text>Rescent</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.segmentClicked(1)}
              style={[
                this.state.activeIndexindex == 1
                  ? {
                      backgroundColor: '#fff',
                      borderBottomColor: '#000',
                      borderBottomWidth: 2,
                      alignItems: 'center',
                      paddingTop: 10,
                      flex: 2,
                      marginRight: 5,
                    }
                  : {
                      backgroundColor: 'trans',
                      alignItems: 'center',
                      paddingTop: 10,
                      flex: 2,
                      borderRadius: 5,
                      marginRight: 5,
                    },
              ]}>
              <Text>Story</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.segmentClicked(2)}
              style={[
                this.state.activeIndexindex == 2
                  ? {
                      backgroundColor: '#fff',
                      borderBottomColor: '#000',
                      borderBottomWidth: 2,
                      alignItems: 'center',
                      paddingTop: 10,
                      flex: 2,
                      marginRight: 5,
                    }
                  : {
                      backgroundColor: 'trans',
                      alignItems: 'center',
                      paddingTop: 10,
                      flex: 2,
                      borderRadius: 5,
                      marginRight: 5,
                    },
              ]}>
              <Text>Like</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: height * 2}}>{this.renderSection()}</View>

          {/* <TabView
            style={{flex: 1, marginTop: 0}}
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
          /> */}
        </View>
      </ScrollView>
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

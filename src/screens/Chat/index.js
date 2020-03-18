import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import ChatList from '@components/ChatList';
import FriendRequest from '@components/FriendRequest';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

class Chatscreen extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'CHATS'},
      {key: 'second', title: 'REQUESTS'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = SceneMap({
    first: ChatList,
    second: FriendRequest,
  });

  render() {
    return (
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
    );
  }
}
const styles = StyleSheet.create({
  indeicator: {
    backgroundColor: '#111',
  },
  tabStyle: {
    backgroundColor: '#fff',
    elevation: 0,
  },
});
export default Chatscreen;

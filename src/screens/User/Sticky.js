import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import StickyContainer from 'recyclerlistview/sticky';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ProfileContainer from '@components/profile/ProfileContainer';
import RescentCard from '@components/profile/RescentCard';
import StoryCard from '@components/profile/StoryCard';
import LikeCard from '@components/profile/LikeCard';
const {height, width} = Dimensions.get('window');
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
export default class StickySample extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'RESCENTS'},
      {key: 'second', title: 'STORY'},
      {key: 'third', title: 'LIKE'},
    ],
  };
  constructor(props) {
    super(props);

    this._setRef = this._setRef.bind(this);

    this._recyclerRef = null;
    this.data = [0, 1, 2];
    this.dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });
    this.dataProvider = this.dataProvider.cloneWithRows(this.data);
    this.layoutProvider = new LayoutProvider(
      index => {
        return index;
      },
      (type, dimension) => {
        if (type === 0) {
          dimension.height = height;
          dimension.width = width;
        }
      },
    );
  }

  _handleIndexChange = index => this.setState({index});

  _renderScene = SceneMap({
    first: RescentCard,
    second: StoryCard,
    third: LikeCard,
  });

  _rowRenderer = (type, data, index) => {
    switch (index) {
      case 0:
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
        break;
    }
  };

  /**
   * This method is called whenever a view has to be stuck as a header or footer.
   * Override the views for whichever sticky view requires changes.
   * Eg. This can be used to add shadows etc. to the views once they stick.
   */

  render() {
    return (
      <RecyclerListView
        layoutProvider={this.layoutProvider}
        ref={this._setRef}
        dataProvider={this.dataProvider}
        rowRenderer={this._rowRenderer}
        showsVerticalScrollIndicator={false}
      />
    );
  }

  _setRef(recycler) {
    this._recyclerRef = recycler;
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

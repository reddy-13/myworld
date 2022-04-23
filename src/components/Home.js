//MyWorld app HomeScreen
//Home Screen For Video Feeds
//code date :  28-02-2020 //

import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  Button,
  Animated,
} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import faker from 'faker';
import StoryBtn from '@components/storyBtn';
import {useNavigation} from '@react-navigation/native';
import BottomNav from '@navigation/BottomNavigation';

const {width, height} = Dimensions.get('window');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollY = new Animated.Value(0);
    this.startFooterHeight = 80;
    this.endFotterHeight = 50;
    const fakeData = [];
    for (let i = 0; i < 10; i += 1) {
      fakeData.push({
        type: 'NORMAL',
        item: {
          id: i,
          image: faker.image.avatar(),
          // name: faker.name.firstName(),
          // description: faker.random.words(5),
        },
      });
    }
    this.state = {
      list: new DataProvider(r1 => r1 === r1).cloneWithRows(fakeData),
    };

    this.layoutProvider = new LayoutProvider(
      i => {
        return this.state.list.getDataForIndex(i).type;
      },
      (type, dim) => {
        switch (type) {
          case 'NORMAL':
            dim.width = width;
            dim.height = height;
            break;
          default:
            dim.width = width;
            dim.height = height;
            break;
        }
      },
    );
  }
  tabHeight = () => {
    <tabNavMargin tab_margin={30} />;
  };

  rowRenderer = (type, data) => {
    const {image, name, description} = data.item;
    switch (type) {
      case 'NORMAL':
        return (
          // <Image style={styles.image} source={{ uri: image }} />

          <View style={{flex: 1}}>
            <Image style={styles.image} source={{uri: image}} />
          </View>
        );
    }
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <StoryBtn />
        <RecyclerListView
          style={{flex: 1, height: height, width: width}}
          rowRenderer={this.rowRenderer}
          dataProvider={this.state.list}
          layoutProvider={this.layoutProvider}
          initialOffset={1}
          pagingEnabled={true} // to achive tiktok ui
          // onScroll={e => console.log(e)}
          showsVerticalScrollIndicator={false}
          onVisibleInicesChanged={() => console.log('fuck')}
          // ItemAnimator={s => console.log(s)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  body: {
    maxWidth: width,
  },
  image: {
    height: height,
    width: width,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    opacity: 0.5,
  },
});

export default Home;

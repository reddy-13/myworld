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
import ViewPager from '@react-native-community/viewpager';
import {useNavigation} from '@react-navigation/native';
// import BottomNav from '../../components/BottomNav';

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
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <ViewPager style={{flex: 1}}>
          <RecyclerListView
            style={{flex: 1, height: height, width: width}}
            rowRenderer={this.rowRenderer}
            dataProvider={this.state.list}
            layoutProvider={this.layoutProvider}
            initialOffset={1}
            pagingEnabled={true}
            onScroll={this.props.onScroll}
            showsVerticalScrollIndicator={false}
            // ItemAnimator={s => console.log(s)}
          />
        </ViewPager>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

//MyWorld app HomeScreen
//Home Screen For Video Feeds
//code date :  28-02-2020 //

import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  Animated,
} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import faker from 'faker';
import StoryBtn from '@components/storyBtn';

const {width, height} = Dimensions.get('window');

class threeImageView extends React.Component {
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
            dim.width = width / 3 - 0.1;
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

          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              borderColor: ' #fff',
              borderWidth: 1,
            }}>
            <Image style={styles.image} source={{uri: image}} />
          </View>
        );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RecyclerListView
          style={{
            flex: 1,
            borderColor: '#fff',
            height: height,
            width: width,
          }}
          rowRenderer={this.rowRenderer}
          dataProvider={this.state.list}
          layoutProvider={this.layoutProvider}
          showsHorizontalScrollIndicator={false}
          isHorizontal={true}
          // ItemAnimator={s => console.log(s)}
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
  body: {
    maxWidth: width,
  },
  image: {
    height: 200,
    width: width / 3 - 0.0001,
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

export default threeImageView;

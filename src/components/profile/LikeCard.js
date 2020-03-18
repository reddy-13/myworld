//MyWorld app HomeScreen
//Home Screen For Video Feeds
//code date :  28-02-2020 //

import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import faker from 'faker';

const {width, height} = Dimensions.get('window');

class LikeCard extends React.Component {
  constructor(props) {
    super(props);

    this.startFooterHeight = 80;
    this.endFotterHeight = 50;
    const fakeData = [];
    for (let i = 0; i < 100; i += 1) {
      fakeData.push({
        type: 'NORMAL',
        item: {
          id: i,
          image: faker.image.avatar(),
          name: faker.name.firstName(),
          tilte: faker.random.words(5),
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
            dim.height = height / 5;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
            break;
        }
      },
    );
  }

  rowRenderer = (type, data) => {
    const {image, name, tilte} = data.item;
    switch (type) {
      case 'NORMAL':
        return (
          <View>
            <View style={styles.row}>
              <View style={styles.rowImageContainer}>
                <Image
                  source={{uri: image}}
                  style={{width: 65, height: 130, borderRadius: 7}}
                />
              </View>
              <View style={styles.rigthCard}>
                <Text>NDTV India</Text>
                <Text style={{fontSize: 19, fontWeight: '700'}}>{tilte}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 16}}>345K views</Text>
                  <Text style={{fontSize: 16, paddingLeft: 5}}>.</Text>
                  <Text style={{fontSize: 16}}> 3h </Text>
                </View>
              </View>
            </View>
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
            height: height,
            width: width,
            backgroundColor: '#fff',
          }}
          rowRenderer={this.rowRenderer}
          dataProvider={this.state.list}
          layoutProvider={this.layoutProvider}
          initialOffset={1}
          onScroll={this.props.onScroll}
          showsVerticalScrollIndicator={false}
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
  row: {
    flexDirection: 'row',
  },
  rowImageContainer: {
    flex: 0.9,
    padding: 20,
    paddingRight: 0,
    paddingBottom: 0,
  },
  rigthCard: {
    flex: 3,
    paddingTop: 30,
    paddingRight: 20,
  },
});

export default LikeCard;

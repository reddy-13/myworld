//MyWorld app HomeScreen
//Home Screen For Video Feeds
//code date :  28-02-2020 //

import React from 'react';
import {View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import faker from 'faker';

// import BottomNav from '../../components/BottomNav';
import UserList from '@components/UserList';
import Header from '@components/Header';
const {width, height} = Dimensions.get('window');

class FriendRequest extends React.Component {
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
          //   description: faker.random.words(5),
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
            dim.height = 70;
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
    const {image, name, description} = data.item;
    switch (type) {
      case 'NORMAL':
        return (
          // <Image style={styles.image} source={{ uri: image }} />

          <View style={{backgroundColor: '#fff'}}>
            <UserList userName={name} image={image} />
          </View>
        );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />

        {/* <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.activePil}>
            <Text>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pil}>
            <Text>Request</Text>
          </TouchableOpacity>
        </View> */}
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
  body: {
    maxWidth: width,
  },
  image: {
    height: 100,
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
  tabContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 45,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  activePil: {
    backgroundColor: '#fff',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    alignItems: 'center',
    paddingTop: 10,
    flex: 2,
    marginRight: 5,
  },
  pil: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: 10,
    flex: 2,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default FriendRequest;

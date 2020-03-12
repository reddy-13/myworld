//MyWorld app HomeScreen
//Home Screen For Video Feeds
//code date :  28-02-2020 //

import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider} from 'recyclerlistview';
import faker from 'faker';
import ViewPager from '@react-native-community/viewpager';
import LayoutProvider from './LayoutProvider';
// import BottomNav from '../../components/BottomNav';

const {width, height} = Dimensions.get('window');

class RecycleView extends React.Component {
  constructor(props) {
    super(props);

    const fakeData = [];
    for (let i = 0; i < 100; i += 1) {
      if (i % 3 === 0) {
        fakeData.push({
          type: 'ITEM_SPAN_1',
          item: {
            id: i,
            image: faker.image.avatar(),
          },
        });
      } else if (i % 3 === 1) {
        fakeData.push({
          type: 'ITEM_SPAN_2',
          item: {
            id: i,
            image: faker.image.avatar(),
          },
        });
      } else {
        fakeData.push({
          type: 'ITEM_SPAN_3',
          item: {
            id: i,
            image: faker.image.avatar(),
          },
        });
      }
    }
    this.state = {
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
    };

    this.layoutProvider = new LayoutProvider(this.state.list);

    this._rowRenderer = this._rowRenderer.bind(this);
  }
  _rowRenderer = (type, data) => {
    const {image, name, description} = data.item;

    switch (type) {
      case 'ITEM_SPAN_1':
        return (
          <View style={{borderColor: '#fff', borderWidth: 1}}>
            <Image style={{height: 140}} source={{uri: image}} />
          </View>
        );
      case 'ITEM_SPAN_3':
        return (
          <View style={{borderColor: '#fff', borderWidth: 1}}>
            <Image style={{height: 140}} source={{uri: image}} />
          </View>
        );
      case 'ITEM_SPAN_2':
        return (
          <View style={{borderColor: '#fff', borderWidth: 1}}>
            <Image style={{height: 140}} source={{uri: image}} />
          </View>
        );
    }
  };

  // const nav = this.props.navigation; // storing navigation prop
  // nav.setOptions({
  //     headerMode :'none', //has different modes float,
  //     title : "Home Feed", // sets title
  //     headerShown:false // hides header
  // }); // setting navigation name on screen
  render() {
    return (
      <View style={styles.container}>
        <RecyclerListView
          // style={{flex: 1, height: 400, width: '100%', borderTopLeftRadius: 25}}
          rowRenderer={this._rowRenderer}
          dataProvider={this.state.list}
          layoutProvider={this.layoutProvider}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // margin: 0,
    // paddingLeft: 9,
    // borderTopLeftRadius: 25,
    // borderBottomLeftRadius: 25,
  },
  body: {
    maxWidth: width,
  },
  image: {
    height: 110,
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

export default RecycleView;

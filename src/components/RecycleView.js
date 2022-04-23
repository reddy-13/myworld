//MyWorld app HomeScreen
//Home Screen For Video Feeds
//code date :  28-02-2020 //

import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider} from 'recyclerlistview';
import faker from 'faker';
// import ViewPager from '@react-native-community/viewpager';
import LayoutProvider from './LayoutProvider';
// import BottomNav from '../../components/BottomNav';

const {width, height} = Dimensions.get('window');

class RecycleView extends React.Component {
  constructor(props) {
    super(props);
    let list = [
      'ITEM_SPAN_1',
      'ITEM_SPAN_2',
      'ITEM_SPAN_3',
      'ITEM_SPAN_4',
      'ITEM_SPAN_5',
    ];
    const fakeData = [];
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < list.length; j++) {
        // console.log(list[j]);

        fakeData.push({
          type: list[j],
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
    const {image, image2, name, description} = data.item;

    switch (type) {
      case 'ITEM_SPAN_1':
        return (
          <View style={{borderColor: '#fff', borderWidth: 0.5}}>
            <Image style={{height: width / 2}} source={{uri: image}} />
          </View>
        );
      case 'ITEM_SPAN_2':
        return (
          <View style={{borderColor: '#fff', borderWidth: 0.5}}>
            <Image style={{height: 100}} source={{uri: image}} />
          </View>
        );
      case 'ITEM_SPAN_3':
        return (
          <View style={{borderColor: '#fff', borderWidth: 0.5}}>
            <Image style={{height: 100}} source={{uri: image}} />
          </View>
        );
      case 'ITEM_SPAN_4':
        return (
          <View style={{borderColor: '#fff', borderWidth: 0.5}}>
            <Image style={{height: 100}} source={{uri: image}} />
          </View>
        );
      case 'ITEM_SPAN_5':
        return (
          <View style={{borderColor: '#fff', borderWidth: 0.5}}>
            <Image style={{height: 200}} source={{uri: image}} />
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
          isHorizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
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

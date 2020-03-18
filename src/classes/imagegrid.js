import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
// import faker from 'faker';
import genImage from '@functions/genImage';
const {width, height} = Dimensions.get('window');
const ViewTypes = {
  TAG: 0,
  IMAGE: 1,
};
const imageViewTypes = {
  FUll: 0,
  HALF_RIGHT: 1,
  HELF_LEFT: 3,
};
export default class imagegrid extends Component {
  constructor(props) {
    super(props);
    let list = {
      ITEM_SPAN_1: 1,
      ITEM_SPAN_2: 2,
      ITEM_SPAN_3: 3,
      ITEM_SPAN_4: 4,
      ITEM_SPAN_5: 5,
    };
    const fakeData = [];

    genImage(list, fakeData, 20);

    this.state = {
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
    };
    this.LayoutProvider = new LayoutProvider(
      index => {
        if (index % 3 === 0) {
          return list.ITEM_SPAN_1;
        } else {
          return list.ITEM_SPAN_2;
        }
      },
      (type, dim) => {
        switch (type) {
          case 'ITEM_SPAN_1':
            return 2;
          case 'ITEM_SPAN_2':
            return 2;
          case 'ITEM_SPAN_3':
            return 2;
          case 'ITEM_SPAN_4':
            return 2;
          case 'ITEM_SPAN_5':
            return 4;
        }
      },
    );

    this._rowRenderer = this._rowRenderer.bind(this);
  }
  _rowRenderer = (type, data) => {
    const {image, image2, name, description} = data.item;

    switch (type) {
      case 'ITEM_SPAN_1':
        return (
          <View style={{borderColor: '#fff', borderWidth: 1}}>
            <Image style={{height: 100}} source={{uri: image}} />
          </View>
        );
      case 'ITEM_SPAN_2':
        return (
          <View style={{borderColor: '#fff', borderWidth: 1}}>
            <Image style={{height: 100}} source={{uri: image}} />
          </View>
        );
      case 'ITEM_SPAN_3':
        return (
          <View style={{borderColor: '#fff', borderWidth: 1}}>
            <Image style={{height: 100}} source={{uri: image}} />
          </View>
        );
      case 'ITEM_SPAN_4':
        return (
          <View style={{borderColor: '#fff', borderWidth: 1}}>
            <Image style={{height: 100}} source={{uri: image}} />
          </View>
        );
      case 'ITEM_SPAN_5':
        return (
          <View style={{borderColor: '#fff', borderWidth: 1}}>
            <Image style={{height: 200, width: 100}} source={{uri: image}} />
          </View>
        );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <RecyclerListView
          getHeightOrWidth="400"
          dataProvider={this.state.list}
          rowRenderer={this._rowRenderer}
          layoutProvider={this.LayoutProvider}
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

import React, {Component} from 'react';
import {Text, View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import Styles from './Style';

import {SliderBox} from 'react-native-image-slider-box';

import SearchBar from '@components/SearchBar';
import TrendingTag from '@components/TrendingTag';
import RecycleView from '@components/RecycleView';
const {width, height} = Dimensions.get('window');
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?restaurant',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree', // Network image
        // require('./assets/images/girl.jpg'),          // Local image
      ],
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={350}
          dotStyle={Styles.customDots}
        />
        <View style={Styles.searchContainer}>
          <SearchBar
            SearchBar={true}
            placeholderTextColor="#fff"
            borderRadius={25}
          />
        </View>
        <TrendingTag tagName="Moviecreem" tagCount="656M" />
        <View
          style={{
            height: 200,
            width: '100%',
            borderBottomLeftRadius: 25,
            borderTopRightRadius: 25,
          }}>
          <RecycleView />
        </View>
      </View>
    );
  }
}

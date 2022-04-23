import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import Styles from './Style';

import {SliderBox} from 'react-native-image-slider-box';

import SearchBar from '@components/SearchBar';
import TrendingTag from '@components/TrendingTag';
import RecycleView from '@components/RecycleView';
import TwoImageView from '@components/twoImageView';
import ThreeImageView from '@components/threeImageView';
const {width, height} = Dimensions.get('window');
export default class Search extends Component {
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
      <ScrollView>
        <View style={Styles.container}>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={300}
            dotStyle={Styles.customDots}
          />
          <View style={Styles.searchContainer}>
            <SearchBar
              SearchBar={true}
              placeholderTextColor="#fff"
              borderRadius="25"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.30)',
              }}
            />
          </View>

          <TrendingTag tagName="FunDance" tagCount="60M" />
          <View
            style={{
              height: 200,
              backgroundColor: '#fff',
              width: '100%',
              marginLeft: 15,
              overflow: 'hidden',
              borderBottomLeftRadius: 15,
              borderTopLeftRadius: 15,
            }}>
            <ThreeImageView />
          </View>

          <TrendingTag tagName="Moviecreem" tagCount="656M" />
          <View
            style={{
              height: 200,
              backgroundColor: '#fff',
              width: '100%',
              marginLeft: 15,
              overflow: 'hidden',
              borderBottomLeftRadius: 15,
              borderTopLeftRadius: 15,
            }}>
            <RecycleView />
          </View>

          <TrendingTag tagName="MyworldQuiz" tagCount="30M" />
          <View
            style={{
              height: 200,
              width: '100%',
              backgroundColor: '#fff',
              marginLeft: 15,
              overflow: 'hidden',
              borderBottomLeftRadius: 15,
              borderTopLeftRadius: 15,
            }}>
            <TwoImageView />
          </View>
        </View>
      </ScrollView>
    );
  }
}
Search.navigationOptions = {};

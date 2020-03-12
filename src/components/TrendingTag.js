import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const TrendingTag = props => {
  return (
    <View style={styles.container}>
      <View style={styles.tagContainer}>
        <Text style={styles.tag}>#</Text>
        <Text style={{paddingLeft: 10, fontSize: 18, fontWeight: '900'}}>
          {props.tagName}
        </Text>
      </View>
      <Text style={{fontSize: 16, paddingRight: 5}}>{props.tagCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
  },
  tag: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 100,
    textAlign: 'center',
    fontSize: 28,
    borderColor: '#c2c4c6',
    borderWidth: 0.5,
  },
  tagContainer: {
    textAlign: 'left',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  tagName: {
    textAlign: 'center',
    marginLeft: 5,

    // width:"70%",
  },
});
export default TrendingTag;

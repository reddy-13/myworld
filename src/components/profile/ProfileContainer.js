import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import faker from 'faker';
const ProfileContainer = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View style={styles.profileInner}>
          <View style={styles.userNameContainer}>
            <Text style={styles.userNameText}>Dr. S Devid Green</Text>
          </View>
          <View style={styles.followerContainer}>
            <Text>20k Followers</Text>
            <Text> . </Text>
            <Text>200k Following</Text>
          </View>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            source={{uri: faker.image.avatar()}}
            style={{width: 110, height: 110, borderRadius: 55}}
          />
        </View>
      </View>

      <View style={styles.decriptionContainer}>
        <Text style={styles.descriptionText}>
          We're bulding the world's best community for creatives to share,grow
          and get hired.
        </Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={styles.folloBtn}>
          <Text>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageBtn}>
          <Text>Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    height: '20%',
    marginTop: 50,
  },
  profileInner: {
    flex: 3,
  },
  userNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  userNameText: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  followerContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 15,
  },
  profileImageContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decriptionContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    paddingRight: 50,
    paddingLeft: 20,
    paddingBottom: 20,
    height: '8%',
    backgroundColor: '#fff',
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: '600',
  },
  tabs: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 3,
    height: 45,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 7,
  },
  folloBtn: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 10,
    flex: 2,
    borderRadius: 5,
    marginRight: 5,
  },
  messageBtn: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: 10,
    flex: 2,
    borderRadius: 5,
    marginRight: 5,
  },
});
export default ProfileContainer;

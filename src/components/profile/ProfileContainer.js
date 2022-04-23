import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import faker from 'faker';
const ProfileContainer = () => {
  return (
    <View style={{heigt: 240}}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
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
            style={{
              width: 100,
              height: 100,
              borderRadius: 55,
            }}
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
    // height: '20%',
    paddingTop: 20,
    paddingBottom: 10,
    marginTop: 40,
  },
  profileInner: {
    flex: 3,
  },
  userNameContainer: {
    paddingTop: 10,
    paddingLeft: 15,
  },
  userNameText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  followerContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 15,
  },
  profileImageContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingRight: 15,
  },
  decriptionContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    paddingRight: 50,
    paddingLeft: 15,
    paddingBottom: 20,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: '600',
  },
  tabs: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 2,
    height: 40,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 7,
  },
  folloBtn: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 7,
    flex: 2,
    borderRadius: 5,
    marginRight: 5,
  },
  messageBtn: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: 7,
    flex: 2,
    borderRadius: 5,
    marginRight: 5,
  },
});
export default ProfileContainer;

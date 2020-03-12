import React,{Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  View,
  Text,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1, padding: 20}}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <View
          style={{
            Flex: 1,
            paddingTop: 70,
            paddingBottom: 40,
          }}>
          <Image
            source={require('./Asset/xzxc.png')}
            style={{width:70, height: 70,}}
          />
        </View>
        <View style={{flexDirection:'row', }}>
          <Text style={{fontSize: 24, color:'#14171a'}}>Welcome To Myworld</Text>
        </View>
        <View
          style={{
            paddingBottom: 3,
            paddingTop: 20,
            paddingBottom: 40,
            paddingRight: 25,
          }}>
          <Text style={{fontSize: 15,fontWeight:'200', color:"#657786"}}>
            Watch videos from your frinds and creator you follow, and find new
            video and creators you'll love.
          </Text>
        </View>
        <View style={{paddingBottom: 20,}}>
       
          <TouchableOpacity style={styles.button}>
          <View style={{flex:1, paddingTop:15,paddingLeft:70,}}>
          <Image
            source={require('./Asset/google.jpg')}
            style={{width: 28, height: 28,borderRadius:30}}
          />
        </View> 
          <View style={{flex:4, paddingTop:16,paddingRight:50}}>
            <Text style={styles.text}>Continue with Google</Text>
          </View>
          </TouchableOpacity>
        </View>
       
        <View style={{Flex: 2}}>
          <TouchableOpacity style={styles.button}>
          <View style={{flex:1, paddingTop:15,paddingLeft:70,}}>
          <Image
            source={require('./Asset/facebook.png')}
            style={{width: 28, height: 28,borderRadius:30 }}
          />
        </View> 
        <View style={{flex:4, paddingTop:16,paddingRight:50}}>
            <Text style={styles.text}>Continue with Facebook</Text>
        </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 120,
          }}>
          <Text style={{fontSize: 14, color:'#98ABBB'}}>
            I agree to Myworld's Terms & Privacy
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 30,
    borderWidth: 0.5,
    justifyContent:"space-around",
    flexDirection:'row',
    borderColor: '#d6d7da',
    backgroundColor: '#fff',
    shadowColor: '#2AC062',
    shadowOpacity: 1,
    shadowOffset: {height: 10, width: 0},
    shadowRadius: 20,
  },

  text: {
    fontSize: 17,
    color: '#000',
    fontWeight:'700',
  },
});

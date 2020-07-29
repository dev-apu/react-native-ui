import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';

import Offers from './Offers';

export default function Login({ navigation }) {
  return (
    <View style={{paddingTop: 50, padding: 20}}>
    <View style={styles.mainlogo}>
         <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Headline style={styles.logotitle}>Telemo</Headline>
      </View>


      <View>
  
      <TextInput
      label="Email"
      autoCapitalize="none"
      style={{marginBottom: 15}}
    />

    <TextInput
      label="Password"
      style={{marginBottom: 15}}
    />

    <Text style={{alignSelf: 'flex-end', marginBottom: 10}}>Forgot Password</Text>

  <Button style={{padding:10}} icon="camera" mode="contained" onPress={() => navigation.navigate('Dashboard')}>
    Login
    </Button>
    <Text style={{marginBottom: 10}}></Text>
    <Button color="#ff5c5c"  style={{padding:10, backgroundColor:'white', fontColor: 'blue'}} icon="camera" mode="contained" onPress={() => navigation.navigate('Register')}>
    Register
    </Button>
    
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  tinyLogo: {
      width: 80,
      height: 80,
      marginBottom: 20,
  },
  logotitle:{
    fontSize: 36,
    color: '#6200ee',
    marginBottom: 15,
    marginTop: 10,
    fontWeight:700,
  },
  mainlogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

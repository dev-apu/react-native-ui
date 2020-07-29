import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';

import Offers from './Offers';

export default function Register({ navigation }) {
  return (
    <View style={{paddingTop: 50, padding: 20}}>
    <View style={styles.mainlogo}>
         
      <Headline style={styles.logotitle}>Sign Up</Headline>
      </View>


      <View>

     <TextInput
      label="Name"
      autoCapitalize="none"
      style={{marginBottom: 15}}
    />
  
      <TextInput
      label="Email"
      autoCapitalize="none"
      style={{marginBottom: 15}}
    />

    <TextInput
      label="Password"
      style={{marginBottom: 15}}
    />

    <TextInput
      label="Confirm Password"
      style={{marginBottom: 15}}
    />


  <Button style={{padding:10}} icon="camera" mode="contained" onPress={() => navigation.navigate('Home')}>
    Register
    </Button>
    <Text style={{marginBottom: 10}}></Text>
    <Button color="#ff5c5c"  style={{padding:10, backgroundColor:'white', fontColor: 'blue'}} icon="camera" mode="contained" onPress={() => navigation.navigate('Login')}>
    Login
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

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,  SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput, Appbar, FAB, Button  } from 'react-native-paper';


export default function CreateOffer({ navigation }) {
  return (
    <View>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()}/>
      <Appbar.Content title="Post a Offer"  />
    </Appbar.Header>

    <View style={{paddingTop: 20, padding: 20}}>

<SafeAreaView style={styles.container}>
      <ScrollView style={{ height: 500}}>

       <TextInput
      label="Title"
      autoCapitalize="none"
      style={{marginBottom: 15}}
    />

    <TextInput
      label="Pickup Point"
      autoCapitalize="none"
      style={{marginBottom: 15}}
    />

    <TextInput
      label="Drop Point"
      autoCapitalize="none"
      style={{marginBottom: 15}}
    />

    <TextInput
      label="Truck Type"
      autoCapitalize="none"
      style={{marginBottom: 15}}
    />


    <TextInput
      label="Drop Point"
      autoCapitalize="none"
      style={{marginBottom: 15}}
    />

    <TextInput
      label="Truck Type"
      autoCapitalize="none"
      style={{marginBottom: 15}}
    />
    

  </ScrollView>
  <Button style={{padding:10}} icon="camera" mode="contained" onPress={() => navigation.navigate('Home')}>
    Post Offer
    </Button>
    </SafeAreaView>


    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    zIndex:99,
  },
})
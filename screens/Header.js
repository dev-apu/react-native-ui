import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Appbar  } from 'react-native-paper';


export default function Header({ navigation }) {
  return (
    <View>
    <Appbar.Header>
      <Appbar.BackAction  />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" />
      <Appbar.Action icon="dots-vertical"  />
    </Appbar.Header>
    <Button onPress={() => navigation.toggleDrawer()} >test</Button>
    </View>
     
  );
}


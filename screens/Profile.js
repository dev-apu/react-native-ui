import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Offers from './Offers';

export default function Profile({ navigation }) {
  return (
    <View>
     <Text>Profile</Text>
      <Button
        title="Offers"
        onPress={() => navigation.navigate('Offers')}
      />


      <Button
        title="goback"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}


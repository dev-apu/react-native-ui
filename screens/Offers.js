import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button,  SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { List, Appbar, FAB  } from 'react-native-paper';


export default function Offers({ navigation }) {
  return (
    <View>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()}/>
      <Appbar.Content title="Offers"  />
    </Appbar.Header>


<SafeAreaView style={styles.container}>
      <ScrollView style={{ height: 500}}>

     <List.Item
    title="First Offer"
    left={props => <List.Icon {...props} icon="folder" />}
  />

  <List.Item
    title="Second Offer"
    left={props => <List.Icon {...props} icon="folder" />}
  />

  <List.Item
    title="Third Offer"
    left={props => <List.Icon {...props} icon="folder" />}
  />

  <List.Item
    title="Fourth Offer"
    left={props => <List.Icon {...props} icon="folder" />}
  />


<List.Item
    title="Fifth Offer"
    left={props => <List.Icon {...props} icon="folder" />}
  />

  <List.Item
    title="Second Offer"
    left={props => <List.Icon {...props} icon="folder" />}
  />

  <List.Item
    title="Third Offer"
    left={props => <List.Icon {...props} icon="folder" />}
  />

  <List.Item
    title="Fourth Offer"
    left={props => <List.Icon {...props} icon="folder" />}
  />


<List.Item
    title="Fifth Offer"
    left={props => <List.Icon {...props} icon="folder" />}
  />

  </ScrollView>

  <TouchableOpacity>
<FAB
    style={styles.fab}
    large
    icon="plus"
    onPress={() => navigation.navigate('CreateOffer')}
  />
</TouchableOpacity>
    </SafeAreaView>


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